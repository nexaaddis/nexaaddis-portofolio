import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Button, Grid } from "@mui/material";

// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";

// Assets
import { aboutus1 } from '../../assets';

const smallImage = "https://via.placeholder.com/400x300";
// import { bg1 } from '../../assets';

export default function Services() {

  const navigate = useNavigate()

  return (
    <Wrapper id="services">
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: '#eee',
          zIndex: -1,
        }}
      />

      {/* Service Section */}
      <Section sx={{ p: '4rem 1rem 15rem 1rem', position: 'relative' }}>
        {/* Slider */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
          }}
        >
          <ClientSlider />
        </Container>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4, textAlign: { xs: "center", md: "center", lg: 'left' } }}>
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
              Leading Software Solutions
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ fontWeight: '800', color: '#1c2229' }}
            >
              Turning Ideas into Reality
            </Typography>
            <Typography variant="body1" mt={1} color="#3a3f45">
            We build innovative software tailored to your needs, helping your business thrive in the digital age.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceBox
                icon="roller"
                title="Designing"
                subtitle="We create impactful visual designs that clearly communicate your brand’s message and connect with your target audience."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceBox
                icon="monitor"
                title="Web Development"
                subtitle="Our team builds responsive and user-friendly websites that enhance your online presence and effectively showcase your business."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceBox
                icon="browser"
                title="Mobile Development"
                subtitle="We develop robust mobile applications that bring your services to your customers' fingertips, ensuring a seamless experience."
              />
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Section = styled(Box)`
  padding: 4rem 0;
`;

