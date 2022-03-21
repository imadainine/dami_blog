import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrapp, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import ReactTooltip from "react-tooltip";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    const Query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
    client.fetch(Query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-expr">
          {experience.map((experience) => (
            <motion.div
              className="app__skills-expr-year "
              key={experience.year}
            >
              <div className="app_skills-expr-item">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-expr-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-expr-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapp(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
