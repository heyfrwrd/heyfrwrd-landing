"use client";

import type React from "react";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

import { Formik, Form, Field } from "formik";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  MessageCircle,
  Clock,
  CheckCircle,
  Target,
  TrendingUp,
  Instagram,
  Facebook,
  Music2,
  Clock2,
  Clock4,
  Clock8,
  MessageCircleHeart,
  MessageCircleWarning,
  TrendingDown,
  TrendingUpDown,
  BicepsFlexed,
  HeartHandshake,
  HeartCrack,
  PiggyBank,
  Handshake,
  CircleDollarSign,
} from "lucide-react";

interface FormData {
  // Step 1: Creator Profile
  creatorType: string;
  followersCount: string;
  platform: string;

  // Step 2: Current Challenges
  biggestChallenge: string;
  timeSpentOnDMs: string;

  // Step 3: Engagement Volume
  dailyInteractions: string;
  missedOpportunities: string;

  // Step 4: Solution Interest
  automationInterest: string;
  paymentWillingness: string;

  // Step 5: Contact Info
  name: string;
  email: string;
  instagram: string;
}

const initialValues: FormData = {
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
  instagram: "",
};

interface OptionCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  value: string;
  selectedValue: string;
  onClick: (value: string) => void;
}

const OptionCard: React.FC<OptionCardProps> = ({
  icon,
  title,
  subtitle,
  value,
  selectedValue,
  onClick,
}) => {
  const isSelected = selectedValue === value;

  return (
    <div
      onClick={() => onClick(value)}
      className={`
        relative cursor-pointer rounded-2xl border-2 p-6 transition-all duration-200 hover:shadow-lg
        ${
          isSelected
            ? "border-[#683fe7] bg-indigo-50 shadow-md"
            : "border-gray-200 bg-white hover:border-gray-300"
        }
      `}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div
          className={`
          p-3 rounded-xl
          ${
            isSelected
              ? "bg-indigo-100 text-indigo-800"
              : "bg-gray-100 text-gray-600"
          }
        `}
        >
          {icon}
        </div>
        <div>
          <h3
            className={`font-semibold text-lg ${
              isSelected ? "text-indigo-900" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          {subtitle && (
            <p
              className={`text-sm mt-1 ${
                isSelected ? "text-indigo-800" : "text-gray-600"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [savedInstagram, setSavedInstagram] = useState("");
  useEffect(() => {
    const handle = window.sessionStorage.getItem("instagram_handle") || "";
    setSavedInstagram(handle);
  }, []);

  const initial = { ...initialValues, instagram: savedInstagram };

  const steps = [
    {
      title: "¡Nos encantaría saber más sobre ti!",
      subtitle: "¡Queremos adaptarnos a tus necesidades!",
    },
    {
      title: "¿Cuál es tu mayor desafío?",
      subtitle: "Identifiquemos el principal problema a resolver.",
    },
    {
      title: "¿Cuánto engagement recibes?",
      subtitle: "Es importante entender el volumen de interacciones.",
    },
    {
      title: "¿Qué tan interesado estás en la automatización?",
      subtitle: "Evalúa tu interés en esta solución.",
    },
    {
      title: "¡Nos mantendremos en contacto contigo!",
      subtitle:
        "Te enviaremos acceso anticipado cuando esté listo. Atento a tus DMs!",
    },
  ];

  const handleSubmit = async (values: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
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

  // Show success screen after submission
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-grays-50 to-white flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white border-2 border-black rounded-3xl p-8 shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¡Agradecemos tu tiempo!
            </h2>
            <p className="text-gray-600 mb-6">
              Hemos recibido tu información. Te contactaremos pronto con acceso
              anticipado a heyfrwrd.me
            </p>
            <div className="text-sm  font-medium">
              Síguenos en{" "}
              <a
                className="text-[#683fe7] hover:text-[#683fe7]/80"
                href="https://www.instagram.com/heyfrwrd"
              >
                @heyfrwrd{" "}
              </a>{" "}
              para más actualizaciones
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main multi-step form UI
  return (
    <div className="min-h-[calc(100vh-64px)] pt-[64px] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Formik
          key={savedInstagram}
          initialValues={initial}
          onSubmit={(values) => {
            if (currentStep === steps.length - 1) {
              handleSubmit(values);
            } else {
              setCurrentStep(currentStep + 1);
            }
          }}
        >
          {({ values, setFieldValue, isValid }) => (
            <Form className="bg-white rounded-3xl border-black border-2 shadow-xl overflow-hidden">
              {/* Progress Bar */}
              <div className="bg-gray-50 px-8 py-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-600">
                    Paso {currentStep + 1} de {steps.length}
                  </span>
                  <span className="text-sm font-medium text-black">
                    {Math.round(((currentStep + 1) / steps.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-black h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentStep + 1) / steps.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Form Content */}
              <div className="px-8 py-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {steps[currentStep].title}
                  </h2>
                  <p className="text-gray-600">{steps[currentStep].subtitle}</p>
                </div>

                <div className="space-y-6">
                  {/* Step 1: Creator Profile */}
                  {currentStep === 0 && (
                    <div className="space-y-8">
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-4">
                          ¿Qué tipo de creador eres? *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* Influencer Option */}
                          <OptionCard
                            icon={<Users className="w-6 h-6" />}
                            title="Influencer"
                            subtitle="Blog personal, estilo de vida..."
                            value="influencer"
                            selectedValue={values.creatorType}
                            onClick={(value) =>
                              setFieldValue("creatorType", value)
                            }
                          />
                          {/* Coach/Mentor Option */}
                          <OptionCard
                            icon={<Target className="w-6 h-6" />}
                            title="Coach/Mentor"
                            subtitle="Negocios, fitness..."
                            value="coach"
                            selectedValue={values.creatorType}
                            onClick={(value) =>
                              setFieldValue("creatorType", value)
                            }
                          />
                          {/* Entrepreneur Option */}
                          <OptionCard
                            icon={<TrendingUp className="w-6 h-6" />}
                            title="Emprendedor"
                            subtitle="Productos/servicios"
                            value="entrepreneur"
                            selectedValue={values.creatorType}
                            onClick={(value) =>
                              setFieldValue("creatorType", value)
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-4">
                          ¿Cuántos seguidores tienes? *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* 1K–10K */}
                          <OptionCard
                            icon={<span>1K–10K</span>}
                            title="1K–10K"
                            value="1k-10k"
                            selectedValue={values.followersCount}
                            onClick={(value) =>
                              setFieldValue("followersCount", value)
                            }
                          />
                          {/* 10K–100K */}
                          <OptionCard
                            icon={<span>10K–100K</span>}
                            title="10K–100K"
                            value="10k-100k"
                            selectedValue={values.followersCount}
                            onClick={(value) =>
                              setFieldValue("followersCount", value)
                            }
                          />
                          {/* 100K+ */}
                          <OptionCard
                            icon={<Users className="w-6 h-6" />}
                            title="100K+"
                            value="100k+"
                            selectedValue={values.followersCount}
                            onClick={(value) =>
                              setFieldValue("followersCount", value)
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-4">
                          ¿Cuál es tu plataforma principal? *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* Instagram */}
                          <OptionCard
                            icon={<Instagram className="w-6 h-6" />}
                            title="Instagram"
                            value="instagram"
                            selectedValue={values.platform}
                            onClick={(value) =>
                              setFieldValue("platform", value)
                            }
                          />
                          {/* TikTok */}
                          <OptionCard
                            icon={<Music2 className="w-6 h-6" />}
                            title="TikTok"
                            value="tiktok"
                            selectedValue={values.platform}
                            onClick={(value) =>
                              setFieldValue("platform", value)
                            }
                          />
                          {/* Facebook */}
                          <OptionCard
                            icon={<Facebook className="w-6 h-6" />}
                            title="Facebook"
                            value="facebook"
                            selectedValue={values.platform}
                            onClick={(value) =>
                              setFieldValue("platform", value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Current Challenges */}
                  {currentStep === 1 && (
                    <div className="space-y-8">
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-4">
                          ¿Cuál es tu mayor desafío con los DMs? *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Time challenge */}
                          <OptionCard
                            icon={<Clock className="w-6 h-6" />}
                            title="Falta de tiempo"
                            subtitle="No alcanzo a responder todo"
                            value="time"
                            selectedValue={values.biggestChallenge}
                            onClick={(value) =>
                              setFieldValue("biggestChallenge", value)
                            }
                          />
                          {/* Repetitive info challenge */}
                          <OptionCard
                            icon={<MessageCircle className="w-6 h-6" />}
                            title="Información repetitiva"
                            subtitle="Siempre las mismas preguntas"
                            value="repetitive"
                            selectedValue={values.biggestChallenge}
                            onClick={(value) =>
                              setFieldValue("biggestChallenge", value)
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-4">
                          ¿Cuánto tiempo dedicas a DMs diario? *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* 30min–1h */}
                          <OptionCard
                            icon={<Clock2 className="w-6 h-6" />}
                            title="30 min–1 h"
                            value="30min-1h"
                            selectedValue={values.timeSpentOnDMs}
                            onClick={(value) =>
                              setFieldValue("timeSpentOnDMs", value)
                            }
                          />
                          {/* 1h–3h */}
                          <OptionCard
                            icon={<Clock4 className="w-6 h-6" />}
                            title="1 h–3 h"
                            value="1h-3h"
                            selectedValue={values.timeSpentOnDMs}
                            onClick={(value) =>
                              setFieldValue("timeSpentOnDMs", value)
                            }
                          />
                          {/* 3h+ */}
                          <OptionCard
                            icon={<Clock8 className="w-6 h-6" />}
                            title="3 h+"
                            value="3h+"
                            selectedValue={values.timeSpentOnDMs}
                            onClick={(value) =>
                              setFieldValue("timeSpentOnDMs", value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Engagement Volume */}
                  {currentStep === 2 && (
                    <div className="space-y-8">
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-4">
                          ¿Cuántas interacciones diarias recibes? *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* 10–50 */}
                          <OptionCard
                            icon={<MessageCircle className="w-6 h-6" />}
                            title="10–50"
                            value="10-50"
                            selectedValue={values.dailyInteractions}
                            onClick={(value) =>
                              setFieldValue("dailyInteractions", value)
                            }
                          />
                          {/* 50–200 */}
                          <OptionCard
                            icon={<MessageCircleHeart className="w-6 h-6" />}
                            title="50–200"
                            value="50-200"
                            selectedValue={values.dailyInteractions}
                            onClick={(value) =>
                              setFieldValue("dailyInteractions", value)
                            }
                          />
                          {/* 200+ */}
                          <OptionCard
                            icon={<MessageCircleWarning className="w-6 h-6" />}
                            title="200+"
                            value="200+"
                            selectedValue={values.dailyInteractions}
                            onClick={(value) =>
                              setFieldValue("dailyInteractions", value)
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-4">
                          ¿Con qué frecuencia sientes que pierdes oportunidades?
                          *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* Rarely */}
                          <OptionCard
                            icon={<TrendingDown className="w-6 h-6" />}
                            title="Raramente"
                            subtitle="1-2 veces/mes"
                            value="rarely"
                            selectedValue={values.missedOpportunities}
                            onClick={(value) =>
                              setFieldValue("missedOpportunities", value)
                            }
                          />
                          {/* Often */}
                          <OptionCard
                            icon={<TrendingUpDown className="w-6 h-6" />}
                            title="A menudo"
                            subtitle="Varias veces/semana"
                            value="often"
                            selectedValue={values.missedOpportunities}
                            onClick={(value) =>
                              setFieldValue("missedOpportunities", value)
                            }
                          />
                          {/* Constantly */}
                          <OptionCard
                            icon={<TrendingUp className="w-6 h-6" />}
                            title="Constantemente"
                            subtitle="Todos los días"
                            value="constantly"
                            selectedValue={values.missedOpportunities}
                            onClick={(value) =>
                              setFieldValue("missedOpportunities", value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Solution Interest */}
                  {currentStep === 3 && (
                    <div className="space-y-8">
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-4">
                          ¿Cuánto pagarías al mes por esta solución? *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <OptionCard
                            icon={<CircleDollarSign className="w-6 h-6" />}
                            title="$8–20"
                            subtitle="aprox. 208-521 HNL "
                            value="8-20"
                            selectedValue={values.paymentWillingness}
                            onClick={(value) =>
                              setFieldValue("paymentWillingness", value)
                            }
                          />
                          <OptionCard
                            icon={<Handshake className="w-6 h-6" />}
                            title="$30–100"
                            subtitle="aprox. 781-2,614.99 HNL"
                            value="30-100"
                            selectedValue={values.paymentWillingness}
                            onClick={(value) =>
                              setFieldValue("paymentWillingness", value)
                            }
                          />
                          <OptionCard
                            icon={<PiggyBank className="w-6 h-6" />}
                            title="$100+"
                            subtitle="aprox. 2,614.99 HNL"
                            value="100+"
                            selectedValue={values.paymentWillingness}
                            onClick={(value) =>
                              setFieldValue("paymentWillingness", value)
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-4">
                          ¿Qué tan interesado estás en una IA que capture datos
                          automáticamente? *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <OptionCard
                            icon={<BicepsFlexed className="w-6 h-6" />}
                            title="Muy interesado"
                            subtitle="Lo necesito ya"
                            value="very-interested"
                            selectedValue={values.automationInterest}
                            onClick={(value) =>
                              setFieldValue("automationInterest", value)
                            }
                          />
                          <OptionCard
                            icon={<HeartHandshake className="w-6 h-6" />}
                            title="Interesado"
                            subtitle="Me gustaría probarlo"
                            value="interested"
                            selectedValue={values.automationInterest}
                            onClick={(value) =>
                              setFieldValue("automationInterest", value)
                            }
                          />
                          <OptionCard
                            icon={<HeartCrack className="w-6 h-6" />}
                            title="Poco interesado"
                            subtitle="Tal vez luego"
                            value="not-interested"
                            selectedValue={values.automationInterest}
                            onClick={(value) =>
                              setFieldValue("automationInterest", value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Contact Info */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Nombre *
                        </label>
                        <Field
                          type="text"
                          name="name"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:ring-0 focus:border-black placeholder:text-gray-300 focus-visible:outline-0"
                          placeholder="Tu nombre completo"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email *
                        </label>
                        <Field
                          type="email"
                          name="email"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:ring-0 focus:border-black placeholder:text-gray-300 focus-visible:outline-0"
                          placeholder="tu@email.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="instagram"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Cuenta de Instagram *
                        </label>
                        <Field
                          type="text"
                          name="instagram"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:ring-0 focus:border-black placeholder:text-gray-300 focus-visible:outline-0"
                          placeholder="@tuusuario"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation */}
              <div className="bg-gray-50 px-8 py-6 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className={`
                    flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all
                    ${
                      currentStep === 0
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:bg-gray-200"
                    }
                  `}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Atrás</span>
                </button>

                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className={`
                    flex items-center space-x-2 px-8 py-3 rounded-xl font-medium transition-all
                    ${
                      isValid && !isSubmitting
                        ? "bg-black text-white hover:bg-black/90 shadow-lg"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>
                        {currentStep === steps.length - 1
                          ? "Enviar"
                          : "Siguiente"}
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
