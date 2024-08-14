import { MediumArrayType } from '../types';


const mediumArray: MediumArrayType[] = [
    {
        id: 1,
        title: "Django Essentials: What You Need to Know",
        date: "June 25, 2024",
        image_url: "https://cdn-images-1.medium.com/max/1400/1*lI8dPIIz3sjGcPmNnLf20g.jpeg",
        miniContent: "Django is a python web framework used in the creation of complex database driven websites. It makes it easy to create secure and maintainable websites using python.",
        link: "https://medium.com/@ukemeboswilson/mastering-django-rest-framework-an-in-depth-guide-to-serializers-5e6b94530c7a",
        dropDownContent: [
            "It provides all necessary tools ('Batteries included') to create secure and maintainable applications.", 
            "Projects in Django are collections of configurations and apps, each with specific functions like managing models or views.",
            "Apps are  python packages that serves a specific function inside of the Django project.",
            
        ],
        clapCount: 4,
    },
    {
        id: 2,
        title: "Django REST Framework",
        date: "July 25, 2024",
        image_url: "https://miro.medium.com/v2/resize:fit:1225/1*F60-kjoaKemo7O11GTdasA.jpeg",
        miniContent: "Django REST framework is a powerful and flexible toolkit for building Web APIs. It simplifies the process of creating and managing APIs by providing a comprehensive suite of features.",
        link: "https://medium.com/@ukemeboswilson/django-rest-framework-7fc0995c0797",
        dropDownContent: [
            "DRF integrates with Django’s core features — models, views, and URLs — making it simple and seamless to create RESTful HTTP resources.", 
            "Django REST framework adopts implementations like class-based views, forms, model validators, the QuerySet API, and more.",
            "Some keys concepts in DRF include Serialization, Views, Routers, Filtering, Searching, Ordering, Pagination etc"
        ],
        clapCount: 0,

    },
    {
        id: 3,
        title: "Unlocking the Magic of Data: An Introduction to Django Models",
        date: "June 28, 2024",
        image_url: "https://miro.medium.com/v2/resize:fit:1225/1*z-bLiZXuVzj4E56sK2Bi-A.png",
        miniContent: "Django Models are a definitive source of information about your data. It contains the essential fields and behaviors of the data you are storing.",
        link: "https://medium.com/@ukemeboswilson/unlocking-the-magic-of-data-an-introduction-to-django-models-b43d9124c588",
        dropDownContent: [
            "A model is a Python class that represents a table in the database.", 
            "Django models provide simplicity, consistency, version control, and advanced metadata handling.",
            "A model can have an arbitrary number of fields, of any type — each one represents a column of data(database field) that we want to store in one of our database tables."
        ],
        clapCount: 1,
    },
    {
        id: 4,
        title: "Mastering Django REST Framework: An In-depth Guide to Serializers",
        date: "July 13, 2024",
        image_url: "https://miro.medium.com/v2/resize:fit:1225/1*-vfzWQ94BCBPJ1T4s2YbVA.png",
        miniContent: "Serializers helps in converting complex data types, such as querysets and model instances, into native Python datatypes that can then be easily rendered into JSON, XML, or other content types.",
        link: "https://medium.com/@ukemeboswilson/mastering-django-rest-framework-an-in-depth-guide-to-serializers-5e6b94530c7a",
        dropDownContent: [
            "Serializers also handle deserialization, allowing parsed data to be converted back into complex types, after first validating the incoming data.", 
            "To create a basic serializer one needs to import the serializers class from rest_framework.",
        ],
        clapCount: 1,
        
    },
    {
        id: 5,
        title: "Understanding and Implementing Views in Django Rest Framework",
        date: "July 29, 2024",
        image_url: "https://miro.medium.com/v2/resize:fit:1225/1*ztrZrQCJw-lSADq6H6JuGg.png",
        miniContent: "One of the core components of DRF is the concept of views, which act as the bridge between HTTP requests and the underlying data models.",
        link: "https://medium.com/@ukemeboswilson/understanding-and-implementing-views-in-django-rest-framework-2184eceb7336",
        dropDownContent: [
            "Django follows the Model-View-Template (MVT) architectural pattern which allows developers to build robust and scalable web applications efficiently.", 
            "The View in Django is responsible for handling the logic associated with processing a user’s request. It retrieves data from the Model and sends it to the Template or a Response.",
            "This response can be the HTML contents of a web page, a redirect, a 404 error, an XML document, a JSON response"
        ],
        clapCount: 1,
    },
    {
        id: 6,
        title: "Mastering URL Routing in Django REST Framework: A Comprehensive Guide",
        date: "August 4, 2024",
        image_url: "https://miro.medium.com/v2/resize:fit:1225/1*Ji6Ihi7c8BqyMaxoFcaR0g.png",
        miniContent: "When building APIs, Django Rest Framework (DRF) extends this routing system to make it easy to create RESTful endpoints.",
        link: "https://medium.com/@ukemeboswilson/mastering-url-routing-in-django-rest-framework-a-comprehensive-guide-4c7bc85d516d",
        dropDownContent: [
            "Django’s URL routing system allows you to map URLs to views, enabling you to handle various HTTP methods (GET, POST, PUT, DELETE) and parameters.", 
            "URLs map incoming HTTP requests to the appropriate views, which handle the requests and return responses.",
            "The use of viewsets allows you to encapsulate the logic for handling different HTTP methods in a single class, while routers automatically generate the necessary URL patterns."
        ],
        clapCount: 1,
    },
    {
        id: 7,
        title: "Using Requests Module to Scrape Webpages",
        date: "July 6, 2020",
        image_url: "https://miro.medium.com/v2/resize:fit:1001/1*2Qm3RjzWvN2SQ9Qij_xy_g.jpeg",
        miniContent: "The requests module allows you to send HTTP requests using Python.",
        link: "https://medium.com/@ukemeboswilson/using-requests-module-to-scrape-webpages-7fabee9da12e",
        dropDownContent: [
            "The HTTP request returns a Response Object with all the response data (content, encoding, status, etc).", 
            "The packages can be installed by simply typing 'pip install requests', 'pip install requests_html'.",
        ],
        clapCount: 40,
    },
]

export default mediumArray