import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { g as getCurrentLanguage, a as getTranslation } from './Layout_v6pAYfX1.mjs';
import { Formik, Form, Field } from 'formik';
import { CheckCircle, Users, Target, TrendingUp, Instagram, Music2, Facebook, Clock, MessageCircle, Clock2, Clock4, Clock8, MessageCircleHeart, MessageCircleWarning, TrendingDown, TrendingUpDown, CircleDollarSign, Handshake, PiggyBank, BicepsFlexed, HeartHandshake, HeartCrack, ChevronLeft, ChevronRight } from 'lucide-react';

// canvas-confetti v1.9.3 built on 2024-04-30T22:19:17.794Z
var module = {};

// source content
/* globals Map */

(function main(global, module, isWorker, workerSize) {
  var canUseWorker = !!(
    global.Worker &&
    global.Blob &&
    global.Promise &&
    global.OffscreenCanvas &&
    global.OffscreenCanvasRenderingContext2D &&
    global.HTMLCanvasElement &&
    global.HTMLCanvasElement.prototype.transferControlToOffscreen &&
    global.URL &&
    global.URL.createObjectURL);

  var canUsePaths = typeof Path2D === 'function' && typeof DOMMatrix === 'function';
  var canDrawBitmap = (function () {
    // this mostly supports ssr
    if (!global.OffscreenCanvas) {
      return false;
    }

    var canvas = new OffscreenCanvas(1, 1);
    var ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, 1, 1);
    var bitmap = canvas.transferToImageBitmap();

    try {
      ctx.createPattern(bitmap, 'no-repeat');
    } catch (e) {
      return false;
    }

    return true;
  })();

  function noop() {}

  // create a promise if it exists, otherwise, just
  // call the function directly
  function promise(func) {
    var ModulePromise = module.exports.Promise;
    var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;

    if (typeof Prom === 'function') {
      return new Prom(func);
    }

    func(noop, noop);

    return null;
  }

  var bitmapMapper = (function (skipTransform, map) {
    // see https://github.com/catdad/canvas-confetti/issues/209
    // creating canvases is actually pretty expensive, so we should create a
    // 1:1 map for bitmap:canvas, so that we can animate the confetti in
    // a performant manner, but also not store them forever so that we don't
    // have a memory leak
    return {
      transform: function(bitmap) {
        if (skipTransform) {
          return bitmap;
        }

        if (map.has(bitmap)) {
          return map.get(bitmap);
        }

        var canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
        var ctx = canvas.getContext('2d');
        ctx.drawImage(bitmap, 0, 0);

        map.set(bitmap, canvas);

        return canvas;
      },
      clear: function () {
        map.clear();
      }
    };
  })(canDrawBitmap, new Map());

  var raf = (function () {
    var TIME = Math.floor(1000 / 60);
    var frame, cancel;
    var frames = {};
    var lastFrameTime = 0;

    if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
      frame = function (cb) {
        var id = Math.random();

        frames[id] = requestAnimationFrame(function onFrame(time) {
          if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
            lastFrameTime = time;
            delete frames[id];

            cb();
          } else {
            frames[id] = requestAnimationFrame(onFrame);
          }
        });

        return id;
      };
      cancel = function (id) {
        if (frames[id]) {
          cancelAnimationFrame(frames[id]);
        }
      };
    } else {
      frame = function (cb) {
        return setTimeout(cb, TIME);
      };
      cancel = function (timer) {
        return clearTimeout(timer);
      };
    }

    return { frame: frame, cancel: cancel };
  }());

  var getWorker = (function () {
    var worker;
    var prom;
    var resolves = {};

    function decorate(worker) {
      function execute(options, callback) {
        worker.postMessage({ options: options || {}, callback: callback });
      }
      worker.init = function initWorker(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker.postMessage({ canvas: offscreen }, [offscreen]);
      };

      worker.fire = function fireWorker(options, size, done) {
        if (prom) {
          execute(options, null);
          return prom;
        }

        var id = Math.random().toString(36).slice(2);

        prom = promise(function (resolve) {
          function workerDone(msg) {
            if (msg.data.callback !== id) {
              return;
            }

            delete resolves[id];
            worker.removeEventListener('message', workerDone);

            prom = null;

            bitmapMapper.clear();

            done();
            resolve();
          }

          worker.addEventListener('message', workerDone);
          execute(options, id);

          resolves[id] = workerDone.bind(null, { data: { callback: id }});
        });

        return prom;
      };

      worker.reset = function resetWorker() {
        worker.postMessage({ reset: true });

        for (var id in resolves) {
          resolves[id]();
          delete resolves[id];
        }
      };
    }

    return function () {
      if (worker) {
        return worker;
      }

      if (!isWorker && canUseWorker) {
        var code = [
          'var CONFETTI, SIZE = {}, module = {};',
          '(' + main.toString() + ')(this, module, true, SIZE);',
          'onmessage = function(msg) {',
          '  if (msg.data.options) {',
          '    CONFETTI(msg.data.options).then(function () {',
          '      if (msg.data.callback) {',
          '        postMessage({ callback: msg.data.callback });',
          '      }',
          '    });',
          '  } else if (msg.data.reset) {',
          '    CONFETTI && CONFETTI.reset();',
          '  } else if (msg.data.resize) {',
          '    SIZE.width = msg.data.resize.width;',
          '    SIZE.height = msg.data.resize.height;',
          '  } else if (msg.data.canvas) {',
          '    SIZE.width = msg.data.canvas.width;',
          '    SIZE.height = msg.data.canvas.height;',
          '    CONFETTI = module.exports.create(msg.data.canvas);',
          '  }',
          '}',
        ].join('\n');
        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e) {
          // eslint-disable-next-line no-console
          typeof console !== undefined && typeof console.warn === 'function' ? console.warn('🎊 Could not load worker', e) : null;

          return null;
        }

        decorate(worker);
      }

      return worker;
    };
  })();

  var defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ['square', 'circle'],
    zIndex: 100,
    colors: [
      '#26ccff',
      '#a25afd',
      '#ff5e7e',
      '#88ff5a',
      '#fcff42',
      '#ffa62d',
      '#ff36ff'
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: false,
    scalar: 1
  };

  function convert(val, transform) {
    return transform ? transform(val) : val;
  }

  function isOk(val) {
    return !(val === null || val === undefined);
  }

  function prop(options, name, transform) {
    return convert(
      options && isOk(options[name]) ? options[name] : defaults[name],
      transform
    );
  }

  function onlyPositiveInt(number){
    return number < 0 ? 0 : Math.floor(number);
  }

  function randomInt(min, max) {
    // [min, max)
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function toDecimal(str) {
    return parseInt(str, 16);
  }

  function colorsToRgb(colors) {
    return colors.map(hexToRgb);
  }

  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, '');

    if (val.length < 6) {
        val = val[0]+val[0]+val[1]+val[1]+val[2]+val[2];
    }

    return {
      r: toDecimal(val.substring(0,2)),
      g: toDecimal(val.substring(2,4)),
      b: toDecimal(val.substring(4,6))
    };
  }

  function getOrigin(options) {
    var origin = prop(options, 'origin', Object);
    origin.x = prop(origin, 'x', Number);
    origin.y = prop(origin, 'y', Number);

    return origin;
  }

  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }

  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function getCanvas(zIndex) {
    var canvas = document.createElement('canvas');

    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = zIndex;

    return canvas;
  }

  function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.scale(radiusX, radiusY);
    context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    context.restore();
  }

  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180);
    var radSpread = opts.spread * (Math.PI / 180);

    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: (opts.startVelocity * 0.5) + (Math.random() * opts.startVelocity),
      angle2D: -radAngle + ((0.5 * radSpread) - (Math.random() * radSpread)),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: opts.color,
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      drift: opts.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar,
      flat: opts.flat
    };
  }

  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
    fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
    fetti.velocity *= fetti.decay;

    if (fetti.flat) {
      fetti.wobble = 0;
      fetti.wobbleX = fetti.x + (10 * fetti.scalar);
      fetti.wobbleY = fetti.y + (10 * fetti.scalar);

      fetti.tiltSin = 0;
      fetti.tiltCos = 0;
      fetti.random = 1;
    } else {
      fetti.wobble += fetti.wobbleSpeed;
      fetti.wobbleX = fetti.x + ((10 * fetti.scalar) * Math.cos(fetti.wobble));
      fetti.wobbleY = fetti.y + ((10 * fetti.scalar) * Math.sin(fetti.wobble));

      fetti.tiltAngle += 0.1;
      fetti.tiltSin = Math.sin(fetti.tiltAngle);
      fetti.tiltCos = Math.cos(fetti.tiltAngle);
      fetti.random = Math.random() + 2;
    }

    var progress = (fetti.tick++) / fetti.totalTicks;

    var x1 = fetti.x + (fetti.random * fetti.tiltCos);
    var y1 = fetti.y + (fetti.random * fetti.tiltSin);
    var x2 = fetti.wobbleX + (fetti.random * fetti.tiltCos);
    var y2 = fetti.wobbleY + (fetti.random * fetti.tiltSin);

    context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';

    context.beginPath();

    if (canUsePaths && fetti.shape.type === 'path' && typeof fetti.shape.path === 'string' && Array.isArray(fetti.shape.matrix)) {
      context.fill(transformPath2D(
        fetti.shape.path,
        fetti.shape.matrix,
        fetti.x,
        fetti.y,
        Math.abs(x2 - x1) * 0.1,
        Math.abs(y2 - y1) * 0.1,
        Math.PI / 10 * fetti.wobble
      ));
    } else if (fetti.shape.type === 'bitmap') {
      var rotation = Math.PI / 10 * fetti.wobble;
      var scaleX = Math.abs(x2 - x1) * 0.1;
      var scaleY = Math.abs(y2 - y1) * 0.1;
      var width = fetti.shape.bitmap.width * fetti.scalar;
      var height = fetti.shape.bitmap.height * fetti.scalar;

      var matrix = new DOMMatrix([
        Math.cos(rotation) * scaleX,
        Math.sin(rotation) * scaleX,
        -Math.sin(rotation) * scaleY,
        Math.cos(rotation) * scaleY,
        fetti.x,
        fetti.y
      ]);

      // apply the transform matrix from the confetti shape
      matrix.multiplySelf(new DOMMatrix(fetti.shape.matrix));

      var pattern = context.createPattern(bitmapMapper.transform(fetti.shape.bitmap), 'no-repeat');
      pattern.setTransform(matrix);

      context.globalAlpha = (1 - progress);
      context.fillStyle = pattern;
      context.fillRect(
        fetti.x - (width / 2),
        fetti.y - (height / 2),
        width,
        height
      );
      context.globalAlpha = 1;
    } else if (fetti.shape === 'circle') {
      context.ellipse ?
        context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) :
        ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
    } else if (fetti.shape === 'star') {
      var rot = Math.PI / 2 * 3;
      var innerRadius = 4 * fetti.scalar;
      var outerRadius = 8 * fetti.scalar;
      var x = fetti.x;
      var y = fetti.y;
      var spikes = 5;
      var step = Math.PI / spikes;

      while (spikes--) {
        x = fetti.x + Math.cos(rot) * outerRadius;
        y = fetti.y + Math.sin(rot) * outerRadius;
        context.lineTo(x, y);
        rot += step;

        x = fetti.x + Math.cos(rot) * innerRadius;
        y = fetti.y + Math.sin(rot) * innerRadius;
        context.lineTo(x, y);
        rot += step;
      }
    } else {
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
      context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
      context.lineTo(Math.floor(x2), Math.floor(y2));
      context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    }

    context.closePath();
    context.fill();

    return fetti.tick < fetti.totalTicks;
  }

  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice();
    var context = canvas.getContext('2d');
    var animationFrame;
    var destroy;

    var prom = promise(function (resolve) {
      function onDone() {
        animationFrame = destroy = null;

        context.clearRect(0, 0, size.width, size.height);
        bitmapMapper.clear();

        done();
        resolve();
      }

      function update() {
        if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
          size.width = canvas.width = workerSize.width;
          size.height = canvas.height = workerSize.height;
        }

        if (!size.width && !size.height) {
          resizer(canvas);
          size.width = canvas.width;
          size.height = canvas.height;
        }

        context.clearRect(0, 0, size.width, size.height);

        animatingFettis = animatingFettis.filter(function (fetti) {
          return updateFetti(context, fetti);
        });

        if (animatingFettis.length) {
          animationFrame = raf.frame(update);
        } else {
          onDone();
        }
      }

      animationFrame = raf.frame(update);
      destroy = onDone;
    });

    return {
      addFettis: function (fettis) {
        animatingFettis = animatingFettis.concat(fettis);

        return prom;
      },
      canvas: canvas,
      promise: prom,
      reset: function () {
        if (animationFrame) {
          raf.cancel(animationFrame);
        }

        if (destroy) {
          destroy();
        }
      }
    };
  }

  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas;
    var allowResize = !!prop(globalOpts || {}, 'resize');
    var hasResizeEventRegistered = false;
    var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
    var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, 'useWorker');
    var worker = shouldUseWorker ? getWorker() : null;
    var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
    var initialized = (canvas && worker) ? !!canvas.__confetti_initialized : false;
    var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
    var animationObj;

    function fireLocal(options, size, done) {
      var particleCount = prop(options, 'particleCount', onlyPositiveInt);
      var angle = prop(options, 'angle', Number);
      var spread = prop(options, 'spread', Number);
      var startVelocity = prop(options, 'startVelocity', Number);
      var decay = prop(options, 'decay', Number);
      var gravity = prop(options, 'gravity', Number);
      var drift = prop(options, 'drift', Number);
      var colors = prop(options, 'colors', colorsToRgb);
      var ticks = prop(options, 'ticks', Number);
      var shapes = prop(options, 'shapes');
      var scalar = prop(options, 'scalar');
      var flat = !!prop(options, 'flat');
      var origin = getOrigin(options);

      var temp = particleCount;
      var fettis = [];

      var startX = canvas.width * origin.x;
      var startY = canvas.height * origin.y;

      while (temp--) {
        fettis.push(
          randomPhysics({
            x: startX,
            y: startY,
            angle: angle,
            spread: spread,
            startVelocity: startVelocity,
            color: colors[temp % colors.length],
            shape: shapes[randomInt(0, shapes.length)],
            ticks: ticks,
            decay: decay,
            gravity: gravity,
            drift: drift,
            scalar: scalar,
            flat: flat
          })
        );
      }

      // if we have a previous canvas already animating,
      // add to it
      if (animationObj) {
        return animationObj.addFettis(fettis);
      }

      animationObj = animate(canvas, fettis, resizer, size , done);

      return animationObj.promise;
    }

    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
      var zIndex = prop(options, 'zIndex', Number);

      if (disableForReducedMotion && preferLessMotion) {
        return promise(function (resolve) {
          resolve();
        });
      }

      if (isLibCanvas && animationObj) {
        // use existing canvas from in-progress animation
        canvas = animationObj.canvas;
      } else if (isLibCanvas && !canvas) {
        // create and initialize a new canvas
        canvas = getCanvas(zIndex);
        document.body.appendChild(canvas);
      }

      if (allowResize && !initialized) {
        // initialize the size of a user-supplied canvas
        resizer(canvas);
      }

      var size = {
        width: canvas.width,
        height: canvas.height
      };

      if (worker && !initialized) {
        worker.init(canvas);
      }

      initialized = true;

      if (worker) {
        canvas.__confetti_initialized = true;
      }

      function onResize() {
        if (worker) {
          // TODO this really shouldn't be immediate, because it is expensive
          var obj = {
            getBoundingClientRect: function () {
              if (!isLibCanvas) {
                return canvas.getBoundingClientRect();
              }
            }
          };

          resizer(obj);

          worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        }

        // don't actually query the size here, since this
        // can execute frequently and rapidly
        size.width = size.height = null;
      }

      function done() {
        animationObj = null;

        if (allowResize) {
          hasResizeEventRegistered = false;
          global.removeEventListener('resize', onResize);
        }

        if (isLibCanvas && canvas) {
          if (document.body.contains(canvas)) {
            document.body.removeChild(canvas); 
          }
          canvas = null;
          initialized = false;
        }
      }

      if (allowResize && !hasResizeEventRegistered) {
        hasResizeEventRegistered = true;
        global.addEventListener('resize', onResize, false);
      }

      if (worker) {
        return worker.fire(options, size, done);
      }

      return fireLocal(options, size, done);
    }

    fire.reset = function () {
      if (worker) {
        worker.reset();
      }

      if (animationObj) {
        animationObj.reset();
      }
    };

    return fire;
  }

  // Make default export lazy to defer worker creation until called.
  var defaultFire;
  function getDefaultFire() {
    if (!defaultFire) {
      defaultFire = confettiCannon(null, { useWorker: true, resize: true });
    }
    return defaultFire;
  }

  function transformPath2D(pathString, pathMatrix, x, y, scaleX, scaleY, rotation) {
    var path2d = new Path2D(pathString);

    var t1 = new Path2D();
    t1.addPath(path2d, new DOMMatrix(pathMatrix));

    var t2 = new Path2D();
    // see https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix/DOMMatrix
    t2.addPath(t1, new DOMMatrix([
      Math.cos(rotation) * scaleX,
      Math.sin(rotation) * scaleX,
      -Math.sin(rotation) * scaleY,
      Math.cos(rotation) * scaleY,
      x,
      y
    ]));

    return t2;
  }

  function shapeFromPath(pathData) {
    if (!canUsePaths) {
      throw new Error('path confetti are not supported in this browser');
    }

    var path, matrix;

    if (typeof pathData === 'string') {
      path = pathData;
    } else {
      path = pathData.path;
      matrix = pathData.matrix;
    }

    var path2d = new Path2D(path);
    var tempCanvas = document.createElement('canvas');
    var tempCtx = tempCanvas.getContext('2d');

    if (!matrix) {
      // attempt to figure out the width of the path, up to 1000x1000
      var maxSize = 1000;
      var minX = maxSize;
      var minY = maxSize;
      var maxX = 0;
      var maxY = 0;
      var width, height;

      // do some line skipping... this is faster than checking
      // every pixel and will be mostly still correct
      for (var x = 0; x < maxSize; x += 2) {
        for (var y = 0; y < maxSize; y += 2) {
          if (tempCtx.isPointInPath(path2d, x, y, 'nonzero')) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
          }
        }
      }

      width = maxX - minX;
      height = maxY - minY;

      var maxDesiredSize = 10;
      var scale = Math.min(maxDesiredSize/width, maxDesiredSize/height);

      matrix = [
        scale, 0, 0, scale,
        -Math.round((width/2) + minX) * scale,
        -Math.round((height/2) + minY) * scale
      ];
    }

    return {
      type: 'path',
      path: path,
      matrix: matrix
    };
  }

  function shapeFromText(textData) {
    var text,
        scalar = 1,
        color = '#000000',
        // see https://nolanlawson.com/2022/04/08/the-struggle-of-using-native-emoji-on-the-web/
        fontFamily = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';

    if (typeof textData === 'string') {
      text = textData;
    } else {
      text = textData.text;
      scalar = 'scalar' in textData ? textData.scalar : scalar;
      fontFamily = 'fontFamily' in textData ? textData.fontFamily : fontFamily;
      color = 'color' in textData ? textData.color : color;
    }

    // all other confetti are 10 pixels,
    // so this pixel size is the de-facto 100% scale confetti
    var fontSize = 10 * scalar;
    var font = '' + fontSize + 'px ' + fontFamily;

    var canvas = new OffscreenCanvas(fontSize, fontSize);
    var ctx = canvas.getContext('2d');

    ctx.font = font;
    var size = ctx.measureText(text);
    var width = Math.ceil(size.actualBoundingBoxRight + size.actualBoundingBoxLeft);
    var height = Math.ceil(size.actualBoundingBoxAscent + size.actualBoundingBoxDescent);

    var padding = 2;
    var x = size.actualBoundingBoxLeft + padding;
    var y = size.actualBoundingBoxAscent + padding;
    width += padding + padding;
    height += padding + padding;

    canvas = new OffscreenCanvas(width, height);
    ctx = canvas.getContext('2d');
    ctx.font = font;
    ctx.fillStyle = color;

    ctx.fillText(text, x, y);

    var scale = 1 / scalar;

    return {
      type: 'bitmap',
      // TODO these probably need to be transfered for workers
      bitmap: canvas.transferToImageBitmap(),
      matrix: [scale, 0, 0, scale, -width * scale / 2, -height * scale / 2]
    };
  }

  module.exports = function() {
    return getDefaultFire().apply(this, arguments);
  };
  module.exports.reset = function() {
    getDefaultFire().reset();
  };
  module.exports.create = confettiCannon;
  module.exports.shapeFromPath = shapeFromPath;
  module.exports.shapeFromText = shapeFromText;
}((function () {
  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  return this || {};
})(), module, false));

// end source content

const confetti = module.exports;
module.exports.create;

const initialValues = {
  creatorType: "",
  followersCount: "",
  platform: "",
  biggestChallenge: "",
  timeSpentOnDMs: "",
  dailyInteractions: "",
  missedOpportunities: "",
  automationInterest: "",
  paymentWillingness: "",
  name: "",
  email: "",
  instagram: ""
};
const OptionCard = ({
  icon,
  title,
  subtitle,
  value,
  selectedValue,
  onClick
}) => {
  const isSelected = selectedValue === value;
  return /* @__PURE__ */ jsx(
    "div",
    {
      onClick: () => onClick(value),
      className: `
        relative cursor-pointer rounded-2xl border-2 p-6 transition-all duration-200 hover:shadow-lg
        ${isSelected ? "border-[#683fe7] bg-indigo-50 shadow-md" : "border-gray-200 bg-white hover:border-gray-300"}
      `,
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-3", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `
          p-3 rounded-xl
          ${isSelected ? "bg-indigo-100 text-indigo-800" : "bg-gray-100 text-gray-600"}
        `,
            children: icon
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: `font-semibold text-lg ${isSelected ? "text-indigo-900" : "text-gray-900"}`,
              children: title
            }
          ),
          subtitle && /* @__PURE__ */ jsx(
            "p",
            {
              className: `text-sm mt-1 ${isSelected ? "text-indigo-800" : "text-gray-600"}`,
              children: subtitle
            }
          )
        ] })
      ] })
    }
  );
};
function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [language, setLanguage] = useState("es");
  const t = (key, params) => getTranslation(key, language, params);
  const [savedInstagram, setSavedInstagram] = useState("");
  useEffect(() => {
    setLanguage(getCurrentLanguage());
    const handle = window.sessionStorage.getItem("instagram_handle") || "";
    setSavedInstagram(handle);
  }, []);
  const initial = { ...initialValues, instagram: savedInstagram };
  const steps = [
    {
      title: t("request.step1Title"),
      subtitle: t("request.step1Subtitle")
    },
    {
      title: t("request.step2Title"),
      subtitle: t("request.step2Subtitle")
    },
    {
      title: t("request.step3Title"),
      subtitle: t("request.step3Subtitle")
    },
    {
      title: t("request.step4Title"),
      subtitle: t("request.step4Subtitle")
    },
    {
      title: t("request.step5Title"),
      subtitle: t("request.step5Subtitle")
    }
  ];
  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!res.ok) throw new Error("DB error");
      confetti({ particleCount: 200, spread: 60, origin: { y: 0.6 } });
      setIsSubmitted(true);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSubmitted) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-to-br from-grays-50 to-white flex items-center justify-center p-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-md w-full text-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border-2 border-black rounded-3xl p-8 shadow-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-8 h-8 text-green-600" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: t("request.thankYou") }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: t("request.successMessage") }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm  font-medium", children: [
        t("request.followUs"),
        " ",
        /* @__PURE__ */ jsxs(
          "a",
          {
            className: "text-[#683fe7] hover:text-[#683fe7]/80",
            href: "https://www.instagram.com/heyfrwrd",
            children: [
              "@heyfrwrd",
              " "
            ]
          }
        ),
        " ",
        t("request.forMoreUpdates")
      ] })
    ] }) }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "min-h-[calc(100vh-64px)] pt-[64px] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl w-full", children: /* @__PURE__ */ jsx(
    Formik,
    {
      initialValues: initial,
      onSubmit: (values) => {
        if (currentStep === steps.length - 1) {
          handleSubmit(values);
        } else {
          setCurrentStep(currentStep + 1);
        }
      },
      children: ({ values, setFieldValue, isValid }) => /* @__PURE__ */ jsxs(Form, { className: "bg-white rounded-3xl border-black border-2 shadow-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 px-8 py-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-600", children: t("request.stepCounter", {
              current: currentStep + 1,
              total: steps.length
            }) }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-black", children: [
              Math.round((currentStep + 1) / steps.length * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-black h-2 rounded-full transition-all duration-300",
              style: {
                width: `${(currentStep + 1) / steps.length * 100}%`
              }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-8 py-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-2", children: steps[currentStep].title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: steps[currentStep].subtitle })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            currentStep === 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "block text-lg font-medium text-gray-700 mb-4", children: [
                  t("request.creatorTypeLabel"),
                  " *"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6" }),
                      title: t("request.influencer"),
                      subtitle: t("request.influencerSub"),
                      value: "influencer",
                      selectedValue: values.creatorType,
                      onClick: (value) => setFieldValue("creatorType", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(Target, { className: "w-6 h-6" }),
                      title: t("request.coach"),
                      subtitle: t("request.coachSub"),
                      value: "coach",
                      selectedValue: values.creatorType,
                      onClick: (value) => setFieldValue("creatorType", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6" }),
                      title: t("request.entrepreneur"),
                      subtitle: t("request.entrepreneurSub"),
                      value: "entrepreneur",
                      selectedValue: values.creatorType,
                      onClick: (value) => setFieldValue("creatorType", value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "block text-lg font-medium text-gray-700 mb-4", children: [
                  t("request.followersCountLabel"),
                  " *"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx("span", { children: "1K–10K" }),
                      title: "1K–10K",
                      value: "1k-10k",
                      selectedValue: values.followersCount,
                      onClick: (value) => setFieldValue("followersCount", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx("span", { children: "10K–100K" }),
                      title: "10K–100K",
                      value: "10k-100k",
                      selectedValue: values.followersCount,
                      onClick: (value) => setFieldValue("followersCount", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6" }),
                      title: "100K+",
                      value: "100k+",
                      selectedValue: values.followersCount,
                      onClick: (value) => setFieldValue("followersCount", value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "block text-lg font-medium text-gray-700 mb-4", children: [
                  t("request.platformLabel"),
                  " *"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(Instagram, { className: "w-6 h-6" }),
                      title: "Instagram",
                      value: "instagram",
                      selectedValue: values.platform,
                      onClick: (value) => setFieldValue("platform", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(Music2, { className: "w-6 h-6" }),
                      title: "TikTok",
                      value: "tiktok",
                      selectedValue: values.platform,
                      onClick: (value) => setFieldValue("platform", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(Facebook, { className: "w-6 h-6" }),
                      title: "Facebook",
                      value: "facebook",
                      selectedValue: values.platform,
                      onClick: (value) => setFieldValue("platform", value)
                    }
                  )
                ] })
              ] })
            ] }),
            currentStep === 1 && /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "block text-lg font-medium text-gray-700 mb-4", children: [
                  t("request.challengeLabel"),
                  " *"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6" }),
                      title: t("request.timeChallenge"),
                      subtitle: t("request.timeChallengeSub"),
                      value: "time",
                      selectedValue: values.biggestChallenge,
                      onClick: (value) => setFieldValue("biggestChallenge", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6" }),
                      title: t("request.repetitiveInfo"),
                      subtitle: t("request.repetitiveInfoSub"),
                      value: "repetitive",
                      selectedValue: values.biggestChallenge,
                      onClick: (value) => setFieldValue("biggestChallenge", value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "block text-lg font-medium text-gray-700 mb-4", children: [
                  t("request.timeDMsLabel"),
                  " *"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(Clock2, { className: "w-6 h-6" }),
                      title: "30 min–1 h",
                      value: "30min-1h",
                      selectedValue: values.timeSpentOnDMs,
                      onClick: (value) => setFieldValue("timeSpentOnDMs", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(Clock4, { className: "w-6 h-6" }),
                      title: "1 h–3 h",
                      value: "1h-3h",
                      selectedValue: values.timeSpentOnDMs,
                      onClick: (value) => setFieldValue("timeSpentOnDMs", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(Clock8, { className: "w-6 h-6" }),
                      title: "3 h+",
                      value: "3h+",
                      selectedValue: values.timeSpentOnDMs,
                      onClick: (value) => setFieldValue("timeSpentOnDMs", value)
                    }
                  )
                ] })
              ] })
            ] }),
            currentStep === 2 && /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "block text-lg font-medium text-gray-700 mb-4", children: [
                  t("request.dailyInteractionsLabel"),
                  " *"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6" }),
                      title: "10–50",
                      value: "10-50",
                      selectedValue: values.dailyInteractions,
                      onClick: (value) => setFieldValue("dailyInteractions", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(MessageCircleHeart, { className: "w-6 h-6" }),
                      title: "50–200",
                      value: "50-200",
                      selectedValue: values.dailyInteractions,
                      onClick: (value) => setFieldValue("dailyInteractions", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(MessageCircleWarning, { className: "w-6 h-6" }),
                      title: "200+",
                      value: "200+",
                      selectedValue: values.dailyInteractions,
                      onClick: (value) => setFieldValue("dailyInteractions", value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "block text-lg font-medium text-gray-700 mb-4", children: [
                  t("request.missedOpportunitiesLabel"),
                  "*"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(TrendingDown, { className: "w-6 h-6" }),
                      title: t("request.rarely"),
                      subtitle: t("request.rarelyFreq"),
                      value: "rarely",
                      selectedValue: values.missedOpportunities,
                      onClick: (value) => setFieldValue("missedOpportunities", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(TrendingUpDown, { className: "w-6 h-6" }),
                      title: t("request.often"),
                      subtitle: t("request.oftenFreq"),
                      value: "often",
                      selectedValue: values.missedOpportunities,
                      onClick: (value) => setFieldValue("missedOpportunities", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6" }),
                      title: t("request.constantly"),
                      subtitle: t("request.constantlyFreq"),
                      value: "constantly",
                      selectedValue: values.missedOpportunities,
                      onClick: (value) => setFieldValue("missedOpportunities", value)
                    }
                  )
                ] })
              ] })
            ] }),
            currentStep === 3 && /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "block text-lg font-medium text-gray-700 mb-4", children: [
                  t("request.paymentWillingnessLabel"),
                  " *"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(CircleDollarSign, { className: "w-6 h-6" }),
                      title: "$8–20",
                      value: "8-20",
                      selectedValue: values.paymentWillingness,
                      onClick: (value) => setFieldValue("paymentWillingness", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(Handshake, { className: "w-6 h-6" }),
                      title: "$30–100",
                      value: "30-100",
                      selectedValue: values.paymentWillingness,
                      onClick: (value) => setFieldValue("paymentWillingness", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(PiggyBank, { className: "w-6 h-6" }),
                      title: "$100+",
                      value: "100+",
                      selectedValue: values.paymentWillingness,
                      onClick: (value) => setFieldValue("paymentWillingness", value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "block text-lg font-medium text-gray-700 mb-4", children: [
                  t("request.automationInterestLabel"),
                  " *"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(BicepsFlexed, { className: "w-6 h-6" }),
                      title: t("request.veryInterested"),
                      subtitle: t("request.veryInterestedSub"),
                      value: "very-interested",
                      selectedValue: values.automationInterest,
                      onClick: (value) => setFieldValue("automationInterest", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(HeartHandshake, { className: "w-6 h-6" }),
                      title: t("request.interested"),
                      subtitle: t("request.interestedSub"),
                      value: "interested",
                      selectedValue: values.automationInterest,
                      onClick: (value) => setFieldValue("automationInterest", value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    OptionCard,
                    {
                      icon: /* @__PURE__ */ jsx(HeartCrack, { className: "w-6 h-6" }),
                      title: t("request.notInterested"),
                      subtitle: t("request.notInterestedSub"),
                      value: "not-interested",
                      selectedValue: values.automationInterest,
                      onClick: (value) => setFieldValue("automationInterest", value)
                    }
                  )
                ] })
              ] })
            ] }),
            currentStep === 4 && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  "label",
                  {
                    htmlFor: "name",
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: [
                      t("request.nameLabel"),
                      " *"
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  Field,
                  {
                    type: "text",
                    name: "name",
                    className: "w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:ring-0 focus:border-black placeholder:text-gray-300 focus-visible:outline-0",
                    placeholder: t("request.namePlaceholder")
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  "label",
                  {
                    htmlFor: "email",
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: [
                      t("request.emailLabel"),
                      " *"
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  Field,
                  {
                    type: "email",
                    name: "email",
                    className: "w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:ring-0 focus:border-black placeholder:text-gray-300 focus-visible:outline-0",
                    placeholder: t("request.emailPlaceholder")
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  "label",
                  {
                    htmlFor: "instagram",
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: [
                      t("request.instagramLabel"),
                      " *"
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  Field,
                  {
                    type: "text",
                    name: "instagram",
                    className: "w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:ring-0 focus:border-black placeholder:text-gray-300 focus-visible:outline-0",
                    placeholder: t("request.instagramPlaceholder")
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 px-8 py-6 flex justify-between items-center", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => setCurrentStep(Math.max(0, currentStep - 1)),
              disabled: currentStep === 0,
              className: `
                    flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all
                    ${currentStep === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-200"}
                  `,
              children: [
                /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx("span", { children: t("request.back") })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: !isValid || isSubmitting,
              className: `
                    flex items-center space-x-2 px-8 py-3 rounded-xl font-medium transition-all
                    ${isValid && !isSubmitting ? "bg-black text-white hover:bg-black/90 shadow-lg" : "bg-gray-300 text-gray-500 cursor-not-allowed"}
                  `,
              children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }),
                /* @__PURE__ */ jsx("span", { children: t("request.sending") })
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("span", { children: currentStep === steps.length - 1 ? t("request.submit") : t("request.next") }),
                /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
              ] })
            }
          )
        ] })
      ] })
    },
    savedInstagram
  ) }) });
}

export { MultiStepForm as M };
