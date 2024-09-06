import React from "react";
import { Box, Card, CardHeader, CardBody, Text, Heading, Image, Flex } from '@chakra-ui/react';

const Dashboard = () => {
  // Sample data for six cards with image URLs
  const cards = [
    { 
      id: 1, 
      title: 'Your Order', 
      description: 'Track, return, or buy things again.', 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png' // Order Box Icon
    },
    { 
      id: 2, 
      title: 'Login & Security', 
      description: 'Edit login, name, and mobile number.', 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png' // Lock Icon
    },
    { 
      id: 3, 
      title: 'Your Addresses', 
      description: 'Edit addresses for orders and gifts.', 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png' // Address Icon
    },
    { 
      id: 4, 
      title: 'Payment', 
      description: 'Edit or add payment methods.', 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/1570/1570991.png' // Payment Icon
    },
    { 
      id: 5, 
      title: 'My Wishlist', 
      description: 'Buy from items saved in Wishlist.', 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/833/833472.png' 
    },
    { 
      id: 6, 
      title: 'Contact Us', 
      description: 'Contact our customer service via phone or chat.', 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/929/929409.png' 
    }
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center" // Center items horizontally
      justifyContent="center" // Center items vertically
      minHeight="100vh" // Full viewport height
      p={4} // Padding around the container
    >
      <h1>Your Account</h1><br />
      <Box
        display="flex"
        flexWrap="wrap"
        gap={4} // Space between cards
        justifyContent="center" // Center cards horizontally within this box
        maxWidth="1200px" // Set a max width to prevent stretching too wide
        width="100%" // Full width of the container
      > 
        {cards.map(card => (
          <Box
            key={card.id}
            p={4}
            boxShadow="lg" // Added boxShadow for shadow effect
            borderWidth="1px"
            borderRadius="md"
            width="300px" // Fixed width for all cards
            height="150px" // Adjust height for image and text
            display="flex"
            justifyContent="space-between"
            onClick={() => handleCardClick(card.id)} // Handle card click
            cursor="pointer" // Change cursor to pointer on hover
            _hover={{ bg: 'gray.100' }} // Optional: Change background on hover
          >
            <Card h="100%" display="flex" flexDirection="row" alignItems="center">
              {/* Image on the left */}
              <Image src={card.imageUrl} alt={card.title} boxSize="50px" mr={4} />

              {/* Card content (text) */}
              <Flex flexDirection="column" justifyContent="center">
                <Heading fontSize='lg' textAlign='left'>{card.title}</Heading>
                <Text fontSize='sm' textAlign='left'>{card.description}</Text>
              </Flex>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const handleCardClick = (id) => {
  console.log(`Card ${id} clicked`);
  // Implement the desired action here
};

export default Dashboard;
