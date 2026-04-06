import { motion } from 'framer-motion';

const reviews = [
    {
        name: 'Fatima Khan',
        rating: 4.5,
        date: '5 days ago',
        text: 'Amazing bridal makeup! I felt like a queen on my wedding day. The team is so professional and skilled. Highly recommend Flourish to every bride.',
        avatar: 'F'
    },
    {
        name: 'Sana Ahmed',
        rating: 4.0,
        date: '1 week ago',
        text: 'The mehndi design was absolutely stunning. Everyone at my wedding was asking who did it. Will definitely come back for every occasion!',
        avatar: 'S'
    },
    {
        name: 'Ayesha Malik',
        rating: 4,
        date: '3 weeks ago',
        text: 'Best facial I have ever had in Karachi. My skin glowed for weeks after. The staff is so warm and welcoming. Love this place!',
        avatar: 'A'
    },
    {
        name: 'Zara Hussain',
        rating: 5,
        date: '1 month ago',
        text: 'Party makeup was flawless. They really understand what you want and deliver perfectly. Prices are very reasonable for the quality.',
        avatar: 'Z'
    },
    {
        name: 'Nadia Sheikh',
        rating: 4.5,
        date: '2 months ago',
        text: 'Hair coloring done beautifully. Exactly the shade I wanted. The parlour is so clean and elegant. My go-to place now!',
        avatar: 'N'
    }
];

const StarFull = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f4b942" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const StarHalf = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="none">
        <defs>
            <linearGradient id="halfGrad">
                <stop offset="50%" stopColor="#f4b942" />
                <stop offset="50%" stopColor="#555" />
            </linearGradient>
        </defs>
        <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            fill="url(#halfGrad)"
        />
    </svg>
);

const StarEmpty = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#555" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<StarFull key={i} />);
        } else if (rating >= i - 0.5) {
            stars.push(<StarHalf key={i} />);
        } else {
            stars.push(<StarEmpty key={i} />);
        }
    }
    return stars;
};
const GoogleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);

export default function GoogleReviews() {
    return (
        <section style={{ backgroundColor: '#1a0e0a', padding: '80px 24px' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '56px' }}
                >
                    <p style={{
                        fontFamily: 'sans-serif',
                        fontSize: '10px',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        color: '#c9829a',
                        marginBottom: '12px'
                    }}>
                        What Our Clients Say
                    </p>
                    <h2 style={{
                        fontFamily: 'serif',
                        fontSize: '48px',
                        color: '#f5f0e8',
                        fontWeight: 400,
                        margin: '0 0 20px 0',
                        lineHeight: 1.1
                    }}>
                        Client Reviews
                    </h2>

                    {/* Overall rating */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        backgroundColor: 'rgba(245,240,232,0.05)',
                        padding: '12px 24px',
                        borderRadius: '999px',
                        border: '1px solid rgba(245,240,232,0.08)'
                    }}>
                        <GoogleIcon />
                        <div style={{ display: 'flex', gap: '3px' }}>
                            {renderStars(4.7)}
                        </div>
                        <span style={{
                            fontFamily: 'sans-serif',
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#f5f0e8'
                        }}>4.7</span>
                        <span style={{
                            fontFamily: 'sans-serif',
                            fontSize: '11px',
                            color: 'rgba(245,240,232,0.4)'
                        }}>on Google</span>
                    </div>
                </motion.div>

                {/* Reviews Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                    gap: '20px'
                }}>
                    {reviews.map((review, i) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            style={{
                                backgroundColor: 'rgba(245,240,232,0.04)',
                                border: '1px solid rgba(245,240,232,0.07)',
                                borderRadius: '24px',
                                padding: '28px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px'
                            }}
                        >
                            {/* Top row */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    {/* Avatar */}
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: '#c9829a',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'sans-serif',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        color: 'white',
                                        flexShrink: 0
                                    }}>
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <p style={{
                                            fontFamily: 'sans-serif',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            color: '#f5f0e8',
                                            margin: 0
                                        }}>
                                            {review.name}
                                        </p>
                                        <p style={{
                                            fontFamily: 'sans-serif',
                                            fontSize: '10px',
                                            color: 'rgba(245,240,232,0.3)',
                                            margin: 0
                                        }}>
                                            {review.date}
                                        </p>
                                    </div>
                                </div>
                                <GoogleIcon />
                            </div>

                            {/* Stars */}
                            <div style={{ display: 'flex', gap: '2px' }}>
                                <div style={{ display: 'flex', gap: '2px' }}>
                                    {renderStars(review.rating)}
                                </div>
                            </div>

                            {/* Review text */}
                            <p style={{
                                fontFamily: 'sans-serif',
                                fontSize: '13px',
                                lineHeight: 1.7,
                                color: 'rgba(245,240,232,0.6)',
                                margin: 0
                            }}>
                                "{review.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}