import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-800">Путь к выздоровлению</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#consultation" className="text-gray-600 hover:text-blue-600 transition-colors">Консультации</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
              Бесплатная помощь 24/7
            </Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Мы поможем вам найти<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                путь к здоровой жизни
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Профессиональная поддержка в борьбе с зависимостью. 
              Конфиденциально, с пониманием и без осуждения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить помощь сейчас
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2" asChild>
                <a href="tel:88005550123">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Горячая линия: 8-800-555-0123
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Виды помощи</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексный подход к выздоровлению с индивидуальными программами поддержки
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="MessageSquare" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">Индивидуальные консультации</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Персональная работа с психологом-наркологом. 
                  Конфиденциальные встречи для проработки зависимости.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">Групповая терапия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Поддержка в группе людей с похожим опытом. 
                  Обмен опытом и взаимная мотивация к выздоровлению.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Clock" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">Кризисная помощь</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Экстренная поддержка 24/7. 
                  Немедленная помощь в критических ситуациях.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="UserCheck" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">Реабилитация</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Долгосрочные программы восстановления. 
                  Возвращение к полноценной жизни в обществе.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Heart" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">Поддержка семьи</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Помощь близким зависимого человека. 
                  Семейная терапия и консультации.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Activity" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">Медицинская помощь</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Детоксикация и медицинское сопровождение. 
                  Лечение под наблюдением врачей.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Online Consultation Section */}
      <section id="consultation" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-4xl font-bold mb-6">Онлайн консультации</h3>
            <p className="text-xl mb-12 opacity-90">
              Получите профессиональную помощь не выходя из дома. 
              Анонимно и конфиденциально.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Video" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">Видео-консультации</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 text-lg leading-relaxed">
                    Личные встречи по видеосвязи с опытными специалистами. 
                    Удобное время, безопасная среда.
                  </CardDescription>
                  <Button variant="secondary" className="mt-6 w-full bg-white text-blue-600 hover:bg-gray-100">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на консультацию
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">Чат поддержки</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 text-lg leading-relaxed">
                    Круглосуточная текстовая поддержка через защищенный чат. 
                    Быстрые ответы на ваши вопросы.
                  </CardDescription>
                  <Button variant="secondary" className="mt-6 w-full bg-white text-blue-600 hover:bg-gray-100">
                    <Icon name="Send" size={20} className="mr-2" />
                    Начать чат
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-semibold mb-4">Запись к специалистам</h4>
              <p className="text-lg mb-6 opacity-90">
                Выберите удобное время для встречи с нашими экспертами
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <Button variant="secondary" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  <Icon name="UserCheck" size={20} className="mr-2" />
                  Психолог-нарколог
                </Button>
                <Button variant="secondary" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  <Icon name="Stethoscope" size={20} className="mr-2" />
                  Врач-нарколог
                </Button>
                <Button variant="secondary" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  <Icon name="Brain" size={20} className="mr-2" />
                  Психотерапевт
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Наш центр</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комфортная и безопасная среда для вашего выздоровления
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/img/5811ff52-65a9-4c49-ab72-e15ef5340315.jpg" 
                  alt="Терапевтическая комната" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold text-lg">Терапевтические комнаты</h4>
                    <p className="text-sm opacity-90">Уютные пространства для индивидуальных консультаций</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/img/359372db-6d5f-499d-aefa-8d4c71d9ed3e.jpg" 
                  alt="Групповая терапия" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold text-lg">Групповые сессии</h4>
                    <p className="text-sm opacity-90">Поддержка в кругу единомышленников</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/img/829cb6dc-3b41-46b8-95ca-2c76b3aa95f5.jpg" 
                  alt="Сад для медитации" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold text-lg">Сад для медитации</h4>
                    <p className="text-sm opacity-90">Спокойное место для размышлений</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/img/3eb718de-ce28-4b49-8633-458ad193422b.jpg" 
                  alt="Консультация врача" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold text-lg">Медицинские консультации</h4>
                    <p className="text-sm opacity-90">Профессиональная врачебная помощь</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/img/a6037cce-a100-4dde-962a-f040ebbcebb6.jpg" 
                  alt="Путь к выздоровлению" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold text-lg">Путь к новой жизни</h4>
                    <p className="text-sm opacity-90">Каждый шаг приближает к цели</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/img/6cbba793-b90d-4276-b4b0-03a9e8ef28c3.jpg" 
                  alt="Фитнес зал" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold text-lg">Зал для йоги и фитнеса</h4>
                    <p className="text-sm opacity-90">Восстановление через физическую активность</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть виртуальную экскурсию
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-12">Почему нам доверяют</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Успешных реабилитаций</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Круглосуточная поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-600">Лет опыта работы</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 border">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img 
                  src="/img/2dabf9fa-34ac-4b45-9794-61ad583ccef9.jpg" 
                  alt="Поддержка" 
                  className="w-64 h-48 object-cover rounded-2xl shadow-lg"
                />
                <div className="text-left">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                    Мы понимаем ваши переживания
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Каждый человек уникален, и мы подходим к лечению индивидуально. 
                    Наша команда состоит из специалистов с многолетним опытом, 
                    которые знают, как помочь в самых сложных ситуациях.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">Свяжитесь с нами</h3>
            <p className="text-xl text-gray-600 mb-12">
              Сделайте первый шаг к выздоровлению. Мы готовы помочь вам прямо сейчас.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-800 mb-4">Экстренная помощь</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-red-600" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">Горячая линия</div>
                      <a href="tel:88005550123" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">8-800-555-0123</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Icon name="MessageSquare" size={24} className="text-blue-600" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">Чат поддержки</div>
                      <div className="text-gray-600">Онлайн 24/7</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-800 mb-4">Плановые консультации</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Icon name="Calendar" size={24} className="text-green-600" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">Запись на прием</div>
                      <a href="tel:+74951234567" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">+7 (495) 123-45-67</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-purple-600" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">Email</div>
                      <div className="text-gray-600">help@recovery-center.ru</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-4 text-lg">
                <Icon name="Heart" size={20} className="mr-2" />
                Начать путь к выздоровлению
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <h5 className="text-xl font-bold">Путь к выздоровлению</h5>
            </div>
            <p className="text-gray-400 mb-6">
              Помощь людям в борьбе с зависимостью. Конфиденциально и бесплатно.
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <span>© 2024 Центр помощи</span>
              <span>•</span>
              <span>Лицензия №123456</span>
              <span>•</span>
              <span>Конфиденциальность</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Phone Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="tel:88005550123"
          className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center gap-3"
        >
          <Icon name="Phone" size={24} className="animate-pulse" />
          <span className="hidden group-hover:block whitespace-nowrap font-semibold bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
            Экстренная помощь
          </span>
        </a>
      </div>

      {/* Emergency Contact Banner */}
      <div className="fixed top-20 left-4 right-4 z-40 md:left-auto md:right-6 md:w-80">
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-xl shadow-lg border border-red-400">
          <div className="flex items-center gap-3">
            <Icon name="AlertCircle" size={20} />
            <div className="flex-1">
              <div className="font-semibold text-sm">Нужна срочная помощь?</div>
              <a href="tel:88005550123" className="text-sm opacity-90 hover:opacity-100">
                Звоните: 8-800-555-0123
              </a>
            </div>
            <button 
              onClick={() => document.querySelector('.emergency-banner')?.classList.add('hidden')}
              className="text-white/80 hover:text-white"
            >
              <Icon name="X" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}