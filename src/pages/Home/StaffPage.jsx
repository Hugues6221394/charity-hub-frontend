import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    Stack,
    alpha,
    useTheme,
    Chip,
    IconButton,
} from '@mui/material';
import {
    ArrowBack,
    Groups,
    LinkedIn,
    Twitter,
    Email,
    Verified,
} from '@mui/icons-material';
import { getImageUrl } from '../../utils/imageUtils';

const StaffPage = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    // Staff members with more details
    const staffMembers = [
        {
            name: 'Hugues NGABONZIZA',
            role: 'Founder & Visionary',
            image: '/images/about/staff1.jpeg',
            bio: 'Passionate about transforming education through technology and community support.',
            social: { linkedin: '#', twitter: '#', email: 'hugues@example.com' },
            featured: true,
        },

        {
            name: 'TESI Divine',
            role: 'Co-Founder & CEO',
            image: '/images/about/staff4.jpeg',
            bio: 'Driving innovation and growth with a focus on social impact and scalability.',
            social: { linkedin: '#', twitter: '#', email: 'divine@studentcharityhub.com' },
            featured: true,
        },
        
        {
            name: 'Gatera Merveille',
            role: 'Managing Director',
            image: '/images/about/staff2.jpeg',
            bio: 'Expert in strategic planning and operational excellence with 10+ years experience.',
            social: { linkedin: '#', twitter: '#', email: 'gatera@studentcharityhub.com' },
            featured: true,
        },
        {
            name: 'Keza Leila',
            role: 'Funds Organiser',
            image: '/images/about/staff3.jpeg',
            bio: 'Dedicated to creating sustainable funding solutions for student empowerment.',
            social: { linkedin: '#', twitter: '#', email: 'keza@studentcharityhub.com' },
            featured: false,
        },
      
        {
            name: 'IRIZA Yvonne',
            role: 'Human Resource Director',
            image: '/images/about/staff5.jpeg',
            bio: 'Building inclusive teams and fostering organizational culture that drives success.',
            social: { linkedin: '#', twitter: '#', email: 'yvonne@studentcharityhub.com' },
            featured: false,
        },
        
    ];

    // Stats for impact section
    const impactStats = [
        { value: '500+', label: 'Students Impacted' },
        { value: '$2M+', label: 'Funds Managed' },
        { value: '95%', label: 'Success Rate' },
        { value: '10+', label: 'Years Experience' },
    ];

    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
            {/* Hero Section with Gradient Background */}
            <Box
                sx={{
                    position: 'relative',
                    color: 'white',
                    py: { xs: 6, md: 12 },
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, 
                        ${alpha('#1976d2', 0.95)} 0%, 
                        ${alpha('#1565c0', 0.9)} 30%, 
                        ${alpha('#0d47a1', 0.85)} 100%)`,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    },
                }}
            >
                {/* Animated Background Elements */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '-10%',
                        right: '-10%',
                        width: '40%',
                        height: '40%',
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${alpha('#fff', 0.1)} 0%, transparent 70%)`,
                        animation: 'pulse 8s ease-in-out infinite',
                        '@keyframes pulse': {
                            '0%, 100%': { transform: 'scale(1)' },
                            '50%': { transform: 'scale(1.2)' },
                        },
                    }}
                />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                    <Stack spacing={3}>
                        {/* Back Button */}
                        <Button
                            startIcon={<ArrowBack />}
                            onClick={() => navigate('/about')}
                            sx={{
                                alignSelf: 'flex-start',
                                color: 'white',
                                borderColor: alpha('#fff', 0.3),
                                borderRadius: 2,
                                px: 2.5,
                                py: 0.75,
                                fontSize: { xs: '0.8rem', md: '0.875rem' },
                                '&:hover': {
                                    borderColor: 'white',
                                    bgcolor: alpha('#fff', 0.1),
                                },
                            }}
                            variant="outlined"
                        >
                            Back to About
                        </Button>

                        {/* Hero Content */}
                        <Box>
                            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={2} sx={{ mb: 2 }}>
                                <Box
                                    sx={{
                                        p: 1.5,
                                        borderRadius: 3,
                                        bgcolor: alpha('#fff', 0.15),
                                        backdropFilter: 'blur(10px)',
                                    }}
                                >
                                    <Groups sx={{ fontSize: { xs: 36, md: 48 }, color: 'white' }} />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontWeight: 900,
                                            fontSize: { xs: '1.75rem', md: '2.5rem', lg: '3rem' },
                                            lineHeight: 1.1,
                                            mb: 1,
                                        }}
                                    >
                                        Meet Our Team
                                    </Typography>
                                    <Chip
                                        label="Leadership Team"
                                        sx={{
                                            bgcolor: alpha('#fff', 0.2),
                                            color: 'white',
                                            fontWeight: 600,
                                            px: 1,
                                            fontSize: { xs: '0.7rem', md: '0.75rem' },
                                            height: { xs: 24, md: 28 },
                                        }}
                                    />
                                </Box>
                            </Stack>

                            <Typography
                                variant="h6"
                                sx={{
                                    maxWidth: 700,
                                    opacity: 0.95,
                                    lineHeight: 1.5,
                                    fontSize: { xs: '0.9rem', md: '1.1rem' },
                                    fontWeight: 300,
                                }}
                            >
                                The passionate individuals driving Student Charity Hub's mission to empower students through education and community support.
                            </Typography>
                        </Box>

                        {/* Impact Stats */}
                        <Grid container spacing={1.5} sx={{ mt: 2 }}>
                            {impactStats.map((stat, index) => (
                                <Grid item xs={6} sm={3} key={index}>
                                    <Box
                                        sx={{
                                            p: { xs: 1.25, md: 2 },
                                            borderRadius: 2,
                                            bgcolor: alpha('#fff', 0.1),
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid',
                                            borderColor: alpha('#fff', 0.2),
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontWeight: 800,
                                                color: 'white',
                                                fontSize: { xs: '1.5rem', md: '2rem' },
                                                mb: 0.25,
                                            }}
                                        >
                                            {stat.value}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: alpha('#fff', 0.9),
                                                fontSize: { xs: '0.7rem', md: '0.85rem' },
                                            }}
                                        >
                                            {stat.label}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                </Container>
            </Box>

            {/* Staff Grid Section - ALWAYS 3 PER ROW */}
            <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 1, sm: 2 } }}>
                <Box sx={{ mb: { xs: 3, md: 6 }, textAlign: 'center' }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            color: 'primary.main',
                            fontSize: { xs: '1.5rem', md: '2.25rem' },
                            mb: 1.5,
                        }}
                    >
                        Our Leadership Team
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            maxWidth: 600,
                            mx: 'auto',
                            fontSize: { xs: '0.85rem', md: '1rem' },
                            lineHeight: 1.6,
                        }}
                    >
                        Meet the visionaries and experts who are transforming student lives through innovation, dedication, and compassion.
                    </Typography>
                </Box>

                {/* Grid with exactly 3 staff per row on ALL screen sizes */}
                <Grid container spacing={1.5} justifyContent="center">
                    {staffMembers.map((staff, index) => (
                        <Grid
                            item
                            xs={4}  // ALWAYS 3 per row (4/12 = 33.33% width)
                            key={index}
                            sx={{
                                display: 'flex',
                                minWidth: 0, // Prevent overflow
                            }}
                        >
                            <Card
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                    border: '1px solid',
                                    borderColor: alpha('#e0e0e0', 0.6),
                                    bgcolor: 'white',
                                    position: 'relative',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        boxShadow: '0 8px 24px rgba(25, 118, 210, 0.12)',
                                        borderColor: 'primary.main',
                                        '& .staff-image': {
                                            transform: 'scale(1.05)',
                                        },
                                    },
                                }}
                            >
                                {/* Featured Badge */}
                                {staff.featured && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 8,
                                            left: 8,
                                            zIndex: 2,
                                        }}
                                    >
                                        <Chip
                                            icon={<Verified sx={{ fontSize: 12 }} />}
                                            label="Featured"
                                            size="small"
                                            sx={{
                                                bgcolor: 'primary.main',
                                                color: 'white',
                                                fontWeight: 600,
                                                fontSize: { xs: '0.65rem', md: '0.7rem' },
                                                height: { xs: 18, md: 20 },
                                                '& .MuiChip-icon': {
                                                    color: 'white',
                                                    fontSize: { xs: 12, md: 14 },
                                                },
                                            }}
                                        />
                                    </Box>
                                )}

                                {/* Square Image Container */}
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: '100%',
                                        paddingTop: '100%', // Perfect square
                                        overflow: 'hidden',
                                        bgcolor: 'grey.100',
                                    }}
                                >
                                    {/* Gradient Overlay */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,0.08) 100%)',
                                            zIndex: 1,
                                        }}
                                    />

                                    {/* Staff Image */}
                                    <Box
                                        component="img"
                                        className="staff-image"
                                        src={getImageUrl(staff.image)}
                                        alt={staff.name}
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                            transition: 'transform 0.5s ease-in-out',
                                        }}
                                        onError={(e) => {
                                            e.target.src = getImageUrl('/images/about/default.jpeg');
                                        }}
                                    />

                                    {/* Social Icons Overlay (Simplified for mobile) */}
                                    <Box
                                        className="social-icons"
                                        sx={{
                                            position: 'absolute',
                                            bottom: 8,
                                            right: 8,
                                            zIndex: 2,
                                            opacity: 0,
                                            transition: 'all 0.2s ease-in-out',
                                        }}
                                    >
                                        <IconButton
                                            size="small"
                                            sx={{
                                                bgcolor: 'white',
                                                color: 'primary.main',
                                                p: 0.5,
                                                minWidth: 0,
                                                '&:hover': {
                                                    bgcolor: 'primary.main',
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            <LinkedIn fontSize="small" sx={{ fontSize: 14 }} />
                                        </IconButton>
                                    </Box>
                                </Box>

                                {/* Content Section */}
                                <CardContent
                                    sx={{
                                        flexGrow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        p: { xs: 1, sm: 1.5 },
                                        bgcolor: 'white',
                                        flex: 1,
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 0.25,
                                            color: 'text.primary',
                                            fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                                            lineHeight: 1.2,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {staff.name}
                                    </Typography>

                                    <Typography
                                        variant="caption"
                                        color="primary.main"
                                        sx={{
                                            mb: 0.75,
                                            fontWeight: 600,
                                            fontSize: { xs: '0.75rem', sm: '0.8rem' },
                                            lineHeight: 1.2,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {staff.role}
                                    </Typography>

                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{
                                            flexGrow: 1,
                                            lineHeight: 1.4,
                                            fontSize: { xs: '0.7rem', sm: '0.75rem' },
                                            opacity: 0.8,
                                            display: { xs: 'none', sm: '-webkit-box' },
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {staff.bio}
                                    </Typography>

                                    {/* Contact Info */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            pt: 1,
                                            mt: 'auto',
                                            borderTop: '1px solid',
                                            borderColor: alpha('#e0e0e0', 0.5),
                                        }}
                                    >
                                        <Email sx={{ fontSize: 12, color: 'text.secondary', mr: 0.5 }} />
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                            sx={{
                                                fontSize: { xs: '0.65rem', sm: '0.7rem' },
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            Email
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Mission Statement */}
                <Box
                    sx={{
                        mt: { xs: 6, md: 8 },
                        p: { xs: 2.5, md: 4 },
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${alpha('#1976d2', 0.04)} 0%, ${alpha('#42a5f5', 0.04)} 100%)`,
                        border: '1px solid',
                        borderColor: alpha('#1976d2', 0.08),
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            color: 'primary.main',
                            mb: 2,
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                        }}
                    >
                        Our Mission
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            maxWidth: 800,
                            mx: 'auto',
                            lineHeight: 1.6,
                            fontSize: { xs: '0.85rem', md: '1rem' },
                            fontStyle: 'italic',
                        }}
                    >
                        "We believe in creating opportunities where every student can thrive. Our team is committed to breaking barriers in education through innovation, empathy, and sustainable support systems."
                    </Typography>
                </Box>
            </Container>

            {/* Join Team CTA */}
            <Box
                sx={{
                    py: { xs: 6, md: 8 },
                    background: `linear-gradient(135deg, ${alpha('#0d47a1', 0.95)} 0%, ${alpha('#1565c0', 0.9)} 100%)`,
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            fontSize: { xs: '1.5rem', md: '2rem' },
                        }}
                    >
                        Join Our Mission
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mb: 3,
                            opacity: 0.9,
                            fontSize: { xs: '0.9rem', md: '1.1rem' },
                            lineHeight: 1.5,
                        }}
                    >
                        Interested in making a difference? We're always looking for passionate individuals to join our team.
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center">
                        <Button
                            variant="contained"
                            size="medium"
                            sx={{
                                bgcolor: 'white',
                                color: 'primary.main',
                                px: 3,
                                py: 1,
                                borderRadius: 2,
                                fontWeight: 600,
                                fontSize: { xs: '0.8rem', md: '0.875rem' },
                                minWidth: { xs: '100%', sm: 'auto' },
                                '&:hover': {
                                    bgcolor: 'grey.100',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s',
                            }}
                        >
                            View Open Positions
                        </Button>
                        <Button
                            variant="outlined"
                            size="medium"
                            sx={{
                                borderColor: 'white',
                                borderWidth: 1,
                                color: 'white',
                                px: 3,
                                py: 1,
                                borderRadius: 2,
                                fontWeight: 600,
                                fontSize: { xs: '0.8rem', md: '0.875rem' },
                                minWidth: { xs: '100%', sm: 'auto' },
                                '&:hover': {
                                    borderColor: 'white',
                                    bgcolor: alpha('#fff', 0.1),
                                },
                                transition: 'all 0.3s',
                            }}
                        >
                            Contact HR
                        </Button>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default StaffPage;