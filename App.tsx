import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShaderBackground } from "./components/ShaderBackground";
import { TypewriterText } from "./components/TypewriterText";
import { GlassPanel } from "./components/GlassPanel";
import { ViewCounter } from "./components/ViewCounter";

type Phase = "greeting1" | "greeting2" | "greeting3" | "bio";

export default function App() {
  const [currentPhase, setCurrentPhase] =
    useState<Phase>("greeting1");
  const [showContent, setShowContent] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () =>
      window.removeEventListener("resize", checkMobile);
  }, []);

  const nextPhase = () => {
    setShowContent(false);
    setTimeout(() => {
      if (currentPhase === "greeting1")
        setCurrentPhase("greeting2");
      else if (currentPhase === "greeting2")
        setCurrentPhase("greeting3");
      else if (currentPhase === "greeting3")
        setCurrentPhase("bio");
      setShowContent(true);
    }, 600);
  };

  const greetings = {
    greeting1: "Привет, меня зовут XenoDev",
    greeting2: "хочешь узнать про меня больше?",
    greeting3: "тогда вот моя информация",
  };

  const skills = [
    { name: "Python", level: 85 },
    { name: "HTML", level: 90 },
    { name: "Java", level: 75 },
    { name: "Node.js", level: 70 },
  ];

  const stats = [
    { label: "Проекты", value: "5+" },
    { label: "Опыт", value: "2 года" },
    { label: "Языки", value: "4" },
  ];

  const friends = [
    {
      username: "@fuck_u_bitch_j",
      nickname: "крестик",
      url: "https://t.me/fuck_u_bitch_j",
    },
    {
      username: "@notso6er",
      nickname: "задротик",
      url: "https://t.me/notso6er",
    },
    {
      username: "@uzuy_tengen",
      nickname: "тенгенчик",
      url: "https://t.me/uzuy_tengen",
    },
    {
      username: "@ubuntu32",
      nickname: "аеза",
      url: "https://t.me/ubuntu32",
    },
    {
      username: "@rz3nx",
      nickname: "ромашка",
      url: "https://t.me/rz3nx",
    },
    {
      username: "@faraonchiklol",
      nickname: "фараончик",
      url: "https://t.me/faraonchiklol",
    },
    {
      username: "@usernemorov",
      nickname: "ветерок",
      url: "https://t.me/usernemorov",
    },
  ];

  const channels = [
    {
      username: "@XenoMyBio",
      description: "био",
      url: "https://t.me/XenoMyBio",
    },
    {
      username: "@dea_plugins",
      description: "плагины на экстераграм",
      url: "https://t.me/dea_plugins",
    },
    {
      username: "@HAPKOTUKU_B_MOUX_BEHAX",
      description: "фоточки?",
      url: "https://t.me/HAPKOTUKU_B_MOUX_BEHAX",
    },
    {
      username: "@XenoUserSell",
      description: "продажа физ/юз/тгк/итд",
      url: "https://t.me/XenoUserSell",
    },
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <ShaderBackground />
      <ViewCounter />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          {currentPhase !== "bio" && (
            <motion.div
              key={currentPhase}
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <TypewriterText
                text={
                  greetings[
                    currentPhase as keyof typeof greetings
                  ]
                }
                delay={isMobile ? 100 : 80}
                onComplete={nextPhase}
                className={`${
                  isMobile
                    ? "text-2xl sm:text-3xl"
                    : "text-4xl md:text-5xl lg:text-6xl"
                } font-light text-white/90 tracking-wide`}
              />
            </motion.div>
          )}

          {currentPhase === "bio" && showContent && (
            <motion.div
              key="bio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-5xl mx-auto"
            >
              <div className="space-y-8 lg:space-y-12">
                {/* Основная информация */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center space-y-6"
                >
                  <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
                      XenoDev
                    </h1>
                    <p className="text-lg md:text-xl text-white/60">
                      15 лет • Любитель • Россия
                    </p>
                  </div>

                  <div className="max-w-2xl mx-auto">
                    <TypewriterText
                      text="Просто делаю всякие штуки в свободное время и изучаю новые технологии."
                      delay={25}
                      className="text-white/80 leading-relaxed"
                    />
                  </div>
                </motion.div>

                {/* Статистика */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="grid grid-cols-3 gap-6 md:gap-8 max-w-md mx-auto"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.7 + index * 0.1,
                      }}
                      className="text-center group cursor-pointer"
                    >
                      <div className="space-y-2 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
                        <div className="text-2xl md:text-3xl font-light text-white group-hover:text-white/80 transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-sm text-white/50">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Навыки */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl md:text-2xl font-light text-white">
                      Навыки
                    </h2>
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 1.1 + index * 0.1,
                          }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-white/80">
                              {skill.name}
                            </span>
                            <span className="text-white/40 text-sm">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width: `${skill.level}%`,
                              }}
                              transition={{
                                duration: 1.2,
                                delay: 1.3 + index * 0.1,
                              }}
                              className="h-full bg-white/60 rounded-full"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Инструменты */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl md:text-2xl font-light text-white">
                      Инструменты
                    </h2>
                    <div className="space-y-6">
                      {/* Основные инструменты */}
                      <div>
                        <h3 className="text-sm text-white/50 mb-3 uppercase tracking-wider">
                          Разработка
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "VS Code",
                            "Git",
                            "GitHub",
                            "Node.js",
                            "npm",
                            "Postman",
                          ].map((tool, index) => (
                            <motion.span
                              key={tool}
                              initial={{
                                opacity: 0,
                                scale: 0.9,
                              }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: 1.4 + index * 0.05,
                              }}
                              className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-md text-sm text-white/80 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                            >
                              {tool}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Дизайн */}
                      <div>
                        <h3 className="text-sm text-white/50 mb-3 uppercase tracking-wider">
                          Дизайн
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {["Figma", "Photoshop", "Canva"].map(
                            (tool, index) => (
                              <motion.span
                                key={tool}
                                initial={{
                                  opacity: 0,
                                  scale: 0.9,
                                }}
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                transition={{
                                  duration: 0.3,
                                  delay: 1.7 + index * 0.05,
                                }}
                                className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-md text-sm text-white/80 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                              >
                                {tool}
                              </motion.span>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Операционные системы */}
                      <div>
                        <h3 className="text-sm text-white/50 mb-3 uppercase tracking-wider">
                          Системы
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {["Linux", "Windows", "WSL"].map(
                            (os, index) => (
                              <motion.span
                                key={os}
                                initial={{
                                  opacity: 0,
                                  scale: 0.9,
                                }}
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                transition={{
                                  duration: 0.3,
                                  delay: 1.9 + index * 0.05,
                                }}
                                className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-md text-sm text-white/80 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                              >
                                {os}
                              </motion.span>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Общение */}
                      <div>
                        <h3 className="text-sm text-white/50 mb-3 uppercase tracking-wider">
                          Общение
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {["Discord", "Telegram", "Slack"].map(
                            (app, index) => (
                              <motion.span
                                key={app}
                                initial={{
                                  opacity: 0,
                                  scale: 0.9,
                                }}
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                transition={{
                                  duration: 0.3,
                                  delay: 2.1 + index * 0.05,
                                }}
                                className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-md text-sm text-white/80 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                              >
                                {app}
                              </motion.span>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Друзья и каналы */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Друзья */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl md:text-2xl font-light text-white">
                      Друзья
                    </h2>
                    <div className="space-y-3">
                      {friends.map((friend, index) => (
                        <motion.div
                          key={friend.username}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 2.0 + index * 0.1,
                          }}
                          onClick={() =>
                            handleLinkClick(friend.url)
                          }
                          className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-400/60 rounded-full group-hover:bg-green-400 transition-colors"></div>
                            <span className="text-white/80 font-light group-hover:text-white transition-colors">
                              {friend.username}
                            </span>
                          </div>
                          <span className="text-white/50 text-sm group-hover:text-white/70 transition-colors">
                            {friend.nickname}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Мои каналы */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.0 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl md:text-2xl font-light text-white">
                      Мои каналы
                    </h2>
                    <div className="space-y-3">
                      {channels.map((channel, index) => (
                        <motion.div
                          key={channel.username}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 2.2 + index * 0.15,
                          }}
                          onClick={() =>
                            handleLinkClick(channel.url)
                          }
                          className="p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-400/60 rounded-full group-hover:bg-blue-400 transition-colors"></div>
                              <span className="text-white/90 font-light group-hover:text-white transition-colors">
                                {channel.username}
                              </span>
                            </div>
                            <p className="text-white/60 text-sm pl-4 group-hover:text-white/80 transition-colors">
                              {channel.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Подвал */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.8 }}
                  className="text-center pt-8 border-t border-white/10"
                >
                  <p className="text-white/40 text-sm">
                    Спасибо за визит
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Индикатор прогресса */}
      {currentPhase !== "bio" && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i ===
                  [
                    "greeting1",
                    "greeting2",
                    "greeting3",
                  ].indexOf(currentPhase)
                    ? "bg-white/80"
                    : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}