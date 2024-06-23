import React, {useEffect, useRef} from "react";
import * as THREE from "three";

function VantaComponent() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = React.useState(null);

  useEffect(() => {
    const loadVanta = () => {
      const script = document.createElement("script");
      script.src = "/vanta.net.min.js"; // Вказуємо шлях до вашого файлу Vanta.js
      script.onload = () => {
        if (!vantaEffect) {
          setVantaEffect(
            window.VANTA.NET({
              THREE: THREE,
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              backgroundColor: 0x60622,
            })
          );
        }
      };
      document.body.appendChild(script);
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: -1,
        backgroundAttachment: "fixed",
      }}
    />
  );
}

export default VantaComponent;
