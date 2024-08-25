import React, { useState } from "react";
import { Grid, Container, Typography, Button, Box } from "@mui/material";
import ProjectsCard from "./ProjectsCard";
import {
  workImgOne,
  workImgTwo,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";

// Array of project data
const projectsData = [
  { title: "Blog Website", category: "Website", image: workImgTwo },
  { title: "Business Card Design", category: "Design", image: workImgOne },
  { title: "Infinity Logo", category: "Logo", image: workImgTwo },
  { title: "Mobile Application", category: "Shopping", image: workImgFive },
  { title: "Responsive Website", category: "E-commerce", image: workImgFour },
  { title: "Graphic Design", category: "Design", image: workImgSix },
  { title: "Ideas & Blog", category: "Website", image: workImgEight },
  { title: "ZOSS Logo", category: "Logo", image: workImgSeven },
  { title: "Blog Website", category: "Website", image: workImgEight },
  { title: "Business Card Design", category: "Design", image: workImgOne },
  { title: "Infinity Logo", category: "Logo", image: workImgTwo },
  { title: "Mobile Application", category: "Shopping", image: workImgFive },
  { title: "Responsive Website", category: "E-commerce", image: workImgFour },
  { title: "Graphic Design", category: "Design", image: workImgSix },
  { title: "Ideas & Blog", category: "Website", image: workImgEight },
  { title: "ZOSS Logo", category: "Logo", image: workImgSeven },
];

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const itemsToShow = isExpanded ? projectsData.length : 8;

  // Handle show more button click
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div style={{ backgroundColor: '#f1f1f1', display: 'flex', justifyContent: 'center' }}>
      <Container
        id="projects"
        sx={{ color: '#f0f0f0', width: "99%", margin: '5rem auto', m: '3rem 0' }}
      >
        <Box sx={{ mb: 4, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            letterSpacing="1.5"
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1.2rem' },
              mb: '0.5rem',
              color: 'var(--primary-color)',
              textTransform: 'uppercase',
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: '800', color: '#1c2229' }}
          >
            Our Awesome Recent Projects
          </Typography>
          <Typography variant="body1" mt={1} color="#3a3f45">
            Discover our recent work, showcasing solutions that elevate business success and innovation.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {projectsData.slice(0, itemsToShow).map((project, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProjectsCard
                title={project.title}
                category={project.category}
                image={project.image}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            onClick={handleToggle}
            sx={{
              borderRadius: '12px',
              padding: '8px 16px',
              borderColor: '#fb8122',
              color: isExpanded ? '#dc3545' : '#fb8122',
              '&:hover': {
                borderColor: isExpanded ? "#dc3545" : "#fb8122",
                color: isExpanded ? "#dc3545" : "#fb8122",
                boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.6)',
              },
              backgroundColor: '#2a2a2a',
              transition: 'all 0.3s ease',
            }}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Projects;
