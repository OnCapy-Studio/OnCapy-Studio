import TeamCard from 'components/TeamCard';
import './style.css';
import John from 'assets/img/john.jpg';
import React, { Component } from "react";
import Slider from "react-slick";

function Team(){

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerMode: false,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };


    return (
        <>
        
        <div className='team-container' id='team'>
          <h1 className='team-title'>TEAM</h1>
            <div className='team-carousel'>
            <Slider {...settings}>
                <TeamCard name={'Felipe Sandes'} func={'Desenvolvedor Back-end'} img={John}></TeamCard>
                <TeamCard name={'Kevyn Cavalcanti'} func={'Desenvolvedor Mobile'} img={John}></TeamCard>
                <TeamCard name={'Lucas Alves'} func={'Documentador'} img={John}></TeamCard>
                <TeamCard name={'Murilo Santana'} func={'Desenvolvedor Front-end'} img={John}></TeamCard>
                <TeamCard name={'Myrella Uchoa'} func={'Desenvolvedora Mobile'} img={John}></TeamCard>
                <TeamCard name={'Vinicius Rodrigues'} func={'Product Owner'} img={John}></TeamCard>
                
            </Slider>
            </div>
        </div>
        
        </>
    );
}

export default Team;