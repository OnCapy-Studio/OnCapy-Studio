import TeamCard from 'components/TeamCard';
import './style.css';
import John from 'assets/img/john.jpg';
import React, { Component } from "react";
import Slider from "react-slick";

function Team(){

    const settings = {
        dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerMode: true,
      initialSlide: 2,
      };


    return (
        <>
        
        <div className='team-container'>
            <div className='team-carousel'>
            <Slider {...settings}>
                <TeamCard name={'Felipe Sandes'} func={'Desenvolvedor Back-end'} img={John}></TeamCard>
                <TeamCard name={'Kevin Cavalcanti'} func={'Desenvolvedor Mobile'} img={John}></TeamCard>
                <TeamCard name={'Lucas Alves'} func={'Documentador'} img={John}></TeamCard>
                <TeamCard name={'Murilo Santana'} func={'Desenvolvedor Front-end'} img={John}></TeamCard>
                <TeamCard name={'Myrella Uchoa'} func={'Desenvolvedor Mobile'} img={John}></TeamCard>
                <TeamCard name={'Vinicius Rodrigues'} func={'Product Owner'} img={John}></TeamCard>
                
            </Slider>
            </div>
        </div>
        
        </>
    );
}

export default Team;