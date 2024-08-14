import {ProjectType} from '../types'

const projectArray: ProjectType[] = [
    {
        id: 1,
        title: "Audio Background Noise Removal",
        content: [
            "Noise reduction in audio processing involves the removal or reduction of unwanted background noise or interference from an audio signal.",
            "This is a Flask application that reduces noise from an input recording file and returns several reduced noise audio files (wav) from several noise reducing methods",
            "Noisereduce is a noise reduction algorithm in python that reduces noise in a method called 'spectral gating' which is a form of Noise Gate.",
            "In audio processing with the Librosa library in Python, you can reduce noise using spectral centroid-based thresholding.",
            "To perform noise reduction using MFCC (Mel-frequency cepstral coefficients) in Python, you can use the python_speech_features library to extract MFCC features from the audio signal and then apply thresholding to reduce noise."
        ],
        githubTitle: "bosukeme/remove_background_noise",
        link: "https://github.com/bosukeme/remove_background_noise",
        image_url: "	https://miro.medium.com/v2/da:true/resize:fit:320/0*qMCdPMB_FrJOgZnq",
        tags: ['Python', "Flask", "wav", "audio", "docker"],
        
    },
    // {
    //     id: 2,
    //     title: "Audio Background Noise Removal",
    //     content: [
    //         "Noise reduction in audio processing involves the removal or reduction of unwanted background noise or interference from an audio signal.",
    //         "This is a Flask application that reduces noise from an input recording file and returns several reduced noise audio files (wav) from several noise reducing methods",
    //         "Noisereduce is a noise reduction algorithm in python that reduces noise in a method called 'spectral gating' which is a form of Noise Gate.",
    //         "In audio processing with the Librosa library in Python, you can reduce noise using spectral centroid-based thresholding.",
    //         "To perform noise reduction using MFCC (Mel-frequency cepstral coefficients) in Python, you can use the python_speech_features library to extract MFCC features from the audio signal and then apply thresholding to reduce noise."
    //     ],
    //     githubTitle: "bosukeme/remove_background_noise",
    //     link: "https://github.com/bosukeme/remove_background_noise",
    //     image_url: "	https://miro.medium.com/v2/da:true/resize:fit:320/0*qMCdPMB_FrJOgZnq",
    //     tags: ['Python', "Flask", "wav", "audio", "docker"],
        
    // },
    // {
    //     id: 3,
    //     title: "Audio Background Noise Removal",
    //     content: [
    //         "Noise reduction in audio processing involves the removal or reduction of unwanted background noise or interference from an audio signal.",
    //         "This is a Flask application that reduces noise from an input recording file and returns several reduced noise audio files (wav) from several noise reducing methods",
    //         "Noisereduce is a noise reduction algorithm in python that reduces noise in a method called 'spectral gating' which is a form of Noise Gate.",
    //         "In audio processing with the Librosa library in Python, you can reduce noise using spectral centroid-based thresholding.",
    //         "To perform noise reduction using MFCC (Mel-frequency cepstral coefficients) in Python, you can use the python_speech_features library to extract MFCC features from the audio signal and then apply thresholding to reduce noise."
    //     ],
    //     githubTitle: "bosukeme/remove_background_noise",
    //     link: "https://github.com/bosukeme/remove_background_noise",
    //     image_url: "	https://miro.medium.com/v2/da:true/resize:fit:320/0*qMCdPMB_FrJOgZnq",
    //     tags: ['Python', "Flask", "wav", "audio", "docker"],
        
    // },
]

export default projectArray;