import React from "react";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Profile } from "./components/profile/Profile";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Profile
          avatar="https://randomuser.me/api/portraits/women/45.jpg"
          name="Anna Caroline Dias"
          bio="Desenvolvedora FullStack"
          phone="+5511987654321"
          email="anacaroline@email.com"
          gitHubUrl="https://github.com/"
          linkedinUrl="https://www.linkedin.com/"
          instagramUrl="https://www.instagram.com/"
          theme="female"
        />
        <Profile
          avatar="https://randomuser.me/api/portraits/men/33.jpg"
          name="João Paulo Souza"
          bio="Engenheiro Backend"
          phone="+5511987654322"
          email="joaopaulo@email.com"
          gitHubUrl="https://github.com/"
          linkedinUrl="https://www.linkedin.com/"
          instagramUrl="https://www.instagram.com/"
          theme="male"
        />
        <Profile
          avatar="https://randomuser.me/api/portraits/women/59.jpg"
          name="Mariana Duarte"
          bio="Designer UI/UX"
          phone="+5511987654323"
          email="marianaduarte@email.com"
          gitHubUrl="https://github.com/"
          linkedinUrl="https://www.linkedin.com/"
          instagramUrl="https://www.instagram.com/"
          theme="female"
        />
        <Profile
          avatar="https://randomuser.me/api/portraits/men/64.jpg"
          name="Diego Gonçalves"
          bio="Desenvolvedor Frontend"
          phone="+5511987654399"
          email="diego.goncalves@email.com"
          gitHubUrl="https://github.com/"
          linkedinUrl="https://www.linkedin.com/"
          instagramUrl="https://www.instagram.com/"
        />
        <Profile
          avatar="https://randomuser.me/api/portraits/men/17.jpg"
          name="Lucas Ribeiro"
          bio="Desenvolvedor Mobile"
          phone="+5511987654333"
          email="lucas.ribeiro@email.com"
          gitHubUrl="https://github.com/"
          linkedinUrl="https://www.linkedin.com/"
          instagramUrl="https://www.instagram.com/"
          theme="male"
        />
        <Profile
          avatar="https://randomuser.me/api/portraits/women/17.jpg"
          name="Fernanda Lopes"
          bio="Product Designer"
          phone="+5511987654344"
          email="fernanda.lopes@email.com"
          gitHubUrl="https://github.com/"
          linkedinUrl="https://www.linkedin.com/"
          instagramUrl="https://www.instagram.com/"
          theme="female"
        />
      </div>
      <Footer />
    </>
  );
}
