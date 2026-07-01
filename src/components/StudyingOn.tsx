import './StudyingOn.css';

export function StudyingOn() {
  const cards = [
    {
      title: "Optics & Ballistics",
      items: [
        "Ballistic computation models",
        "Optical system design and precision aiming",
        "Environmental compensation for improved shot accuracy"
      ]
    },
    {
      title: "Real-Time Sensor Integration",
      items: [
        "Multi-sensor data acquisition and synchronization",
        "Sensor fusion using IMU, laser rangefinder, and environmental sensors",
        "High-speed real-time processing for accurate decision-making"
      ]
    },
    {
      title: "Power Management System",
      items: [
        "Efficient power architecture for portable defence systems",
        "Battery optimization and thermal management",
        "Reliable power distribution for mission-critical operations"
      ]
    },
    {
      title: "Data Communication System",
      items: [
        "High-speed communication between sensors, processors, and display modules",
        "Embedded communication protocols (SPI, I²C, UART, USB)",
        "Low-latency, reliable data exchange for real-time performance"
      ]
    }
  ];

  return (
    <section id="studying-on" className="py-24 px-6 bg-background relative z-10 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2cb5a0] via-gray-300 to-white text-transparent bg-clip-text tracking-tight">
          Studying On
        </h2>
      </div>

      <div className="studying-container">
        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <div key={index} className={`study-card card-${index + 1}`}>
              <h3 className="card-title">{card.title}</h3>
              <ul className="card-desc">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
