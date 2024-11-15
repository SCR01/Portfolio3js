/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { skills, experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import Footer from '../components/Footer';  // Import Footer

const About = () => {
  return (
    <section className='max-container'>
      {/* Heading with gradient text for the name */}
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Sharad</span>
      </h1>
      
      {/* Introduction paragraph and container */}
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Developer skilled in front-end technologies, DSA, and the MERN stack, focused on building responsive, user-centric applications. Passionate about solving complex problems and contributing to impactful open-source projects.
        </p>

        {/* Skills section heading */}
        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text text-black'>My Skills</h3>
        </div>
        
        {/* Skills container with flex wrap */}
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill, index) => (
            <div className='block-container w-20 h-20' key={index}>
              {/* Background for skill icon */}
              <div className='btn-back rounded-xl' />
              
              {/* Skill icon and styling */}
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16 flex flex-col'>
        <h3 className='subhead-text '>Work Experience</h3>
       
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Worked in open-source programs like Hacktoberfest, GSoC, and GSSoC, contributing to various projects, including developing a Car Marketplace App and enhancing user experiences. Promoting programs and organizing coding events:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{
                  background: experience.iconBg
                }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-black-700 font-normal pl-1 text-sm'>
                      {point} {/* Changed text color to a darker shade */}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200'/>
      <CTA/>

    
    </section>
  );
};

export default About;
