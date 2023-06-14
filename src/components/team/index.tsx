import TeamCard from 'components/TeamCard';
import './style.css';
import Kevin from 'assets/img/kevin.jpg';
import Lucas from 'assets/img/lucas.jpg';
import Felipe from 'assets/img/felipe.jpg';
import Murilo from 'assets/img/murilo.jpg';
import Myrella from 'assets/img/myrella.jpg';
import Vinicius from 'assets/img/vinicius.jpg';
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
                <TeamCard name={'Felipe Sandes'} func={'Back-end developer'} img={Felipe}></TeamCard>
                <TeamCard name={'Kevyn Cavalcanti'} func={'Mobile developer'} img={Kevin}></TeamCard>
                <TeamCard name={'Lucas Alves'} func={'Documenter'} img={Lucas}></TeamCard>
                <TeamCard name={'Murilo Santana'} func={'Front-end developer'} img={Murilo}></TeamCard>
                <TeamCard name={'Myrella Uchoa'} func={'Mobile developer'} img={Myrella}></TeamCard>
                <TeamCard name={'Vinicius Rodrigues'} func={'Product Owner'} img={Vinicius}></TeamCard>
                
            </Slider>
            </div>
        </div>
        
        </>
    );
}

export default Team;
