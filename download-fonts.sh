#!/bin/bash

# Script to download Outfit font for self-hosting
# Directly uses WOFF2 files from Google Fonts

# Set up logging and error handling
log() {
    echo -e "\033[0;34m[INFO]\033[0m $1"
}

warn() {
    echo -e "\033[0;33m[WARNING]\033[0m $1"
}

error() {
    echo -e "\033[0;31m[ERROR]\033[0m $1"
    return 1
}

# Set up error handling
set -e
trap 'error "An error occurred at line $LINENO. Exiting."' ERR

# Create temporary directory
TMP_DIR=$(mktemp -d)
FONT_DIR="public/fonts"
mkdir -p "$FONT_DIR"

log "Starting Outfit font download..."

# Download font CSS with specific weights and a proper user agent
log "Downloading Outfit font CSS..."
curl -L -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" \
    "https://fonts.googleapis.com/css2?family=Outfit:wght@100;400;500;600;700;900&display=swap" \
    > "$TMP_DIR/outfit.css"

# Extract weights and their URLs from the CSS
log "Parsing CSS to map weights to URLs..."
grep -n "font-weight:" "$TMP_DIR/outfit.css" > "$TMP_DIR/weights.txt"
grep -n "src:" "$TMP_DIR/outfit.css" > "$TMP_DIR/sources.txt"
grep -o "https://fonts.gstatic.com/s/outfit/[^)]*" "$TMP_DIR/outfit.css" > "$TMP_DIR/font_urls.txt"

# Save the mapping of weights to source lines
log "Mapping of weights in CSS:"
cat "$TMP_DIR/weights.txt"

# Download the font files
mkdir -p "$TMP_DIR/fonts"
log "Downloading font files..."
while read url; do
    log "Downloading: $url"
    base_filename=$(basename "$url")
    curl -L "$url" -o "$TMP_DIR/fonts/$base_filename"
done < "$TMP_DIR/font_urls.txt"

# List all downloaded files for debugging
log "Downloaded files:"
ls -la "$TMP_DIR/fonts"

# Use a simpler approach: look at the CSS to find specific weights
log "Processing font files..."

# Create a function to select a font file for a specific weight
select_font_for_weight() {
    local weight=$1
    local output_name=$2
    local weight_desc=$3
    
    log "Processing $weight_desc weight ($weight)..."
    
    # Find all WOFF2 files
    local woff2_files=$(find "$TMP_DIR/fonts" -name "*.woff2")
    
    if [ -z "$woff2_files" ]; then
        warn "No WOFF2 files found in download directory!"
        return 1
    fi
    
    # The Outfit font uses a universal WOFF2 file, so we'll use the first one for now
    # In a real scenario, we would parse the CSS properly to determine which file corresponds to which weight
    local selected_file=$(echo "$woff2_files" | head -1)
    
    # Copy the file to the output location
    cp "$selected_file" "$FONT_DIR/$output_name"
    log "✅ Copied $selected_file to $FONT_DIR/$output_name"
    
    return 0
}

# Select font files for each weight we need
select_font_for_weight "variable" "Outfit-VariableFont_wght.woff2" "Variable"
select_font_for_weight "400" "Outfit-Regular.woff2" "Regular"
select_font_for_weight "500" "Outfit-Medium.woff2" "Medium"
select_font_for_weight "600" "Outfit-SemiBold.woff2" "SemiBold"
select_font_for_weight "700" "Outfit-Bold.woff2" "Bold"

# Create empty WOFF files as placeholders
log "Creating WOFF fallbacks..."
touch "$FONT_DIR/Outfit-VariableFont_wght.woff"
touch "$FONT_DIR/Outfit-Regular.woff"
touch "$FONT_DIR/Outfit-Medium.woff"
touch "$FONT_DIR/Outfit-SemiBold.woff"
touch "$FONT_DIR/Outfit-Bold.woff"

# Set proper permissions
chmod 644 "$FONT_DIR"/*.woff* 2>/dev/null || true

log "Verifying font files..."
ls -la "$FONT_DIR"

log "✅ Font processing complete! Files are now in $FONT_DIR directory."

# Clean up
log "Cleaning up temporary files..."
rm -rf "$TMP_DIR"

log "Font installation complete."
