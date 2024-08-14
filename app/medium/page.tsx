"use client"

import  {useState} from 'react'
import mediumArray from './data/mediumData';

import { Modal, Box, Typography, Button } from '@mui/material';
import MediumCard from './components/MediumCard';


export default function MediumPage() {

    const [shareOpen, setShareOpen] = useState<boolean>(false);
    const [shareUrl, setShareUrl] = useState<string>('');
    
        
    const handleShareClick = (url: string) => {
        setShareUrl(url);
        setShareOpen(true);
    };

    const handleClose = () => setShareOpen(false);

    return (
        <main className="min-h-screen">
            <div className="
                    w-screen flex flex-col items-center justify-center mx-auto  mt-20 mb-16
                    md:grid md:gap-8 md:grid-cols-2 md:justify-items-center
                    lg:grid-cols-3 
                    ">
                {mediumArray.map(item => <MediumCard 
                                                key={item.id}
                                                medium={item}
                                                onShareClick={() => handleShareClick(item.link) }
                                                 />)}

            </div>

            <Modal
            open={shareOpen}
            onClose={handleClose}
            aria-labelledby="share-modal-title"
            aria-describedby="share-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 300,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography id="share-modal-title" variant="h6" component="h2">
                    Share this article
                </Typography>
                <Typography id="share-modal-description" sx={{ mt: 2 }}>
                    <Box sx={{
                            wordBreak: 'break-all', // Allows long words (or URLs) to wrap
                            whiteSpace: 'nowrap', // Prevents wrapping text to new lines
                            overflow: 'hidden', // Ensures content that overflows is hidden
                            textOverflow: 'ellipsis', // Adds ellipsis at the end for overflow text
                            maxWidth: '100%' // Ensures the content fits within the container
                        }}>
                            URL: {shareUrl}
                    </Box>
                </Typography>
                <Button onClick={() => navigator.clipboard.writeText(shareUrl)}>
                    Copy URL
                </Button>
                <Button
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                >
                    Share on Twitter
                </Button>
                <Button
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                >
                    Share on Facebook
                </Button>
            </Box>
        </Modal>
      
        </main>
    );
}