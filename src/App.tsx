import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import kartonImg from "./assets/projects/karton.png";
import marathonImg from "./assets/projects/marathon.png";
import avatar from "./assets/projects/avatar.jpg";

const Accueil: React.FC = () => {
    // États pour gérer l'ouverture des détails
    const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    // --- FONCTIONS DE GESTION (Logique d'exclusion mutuelle) ---

    // Ouvrir une expérience ferme les projets
    const handleOpenExperience = (index: number) => {
        setSelectedExperience(index);
        setSelectedProject(null); // Ferme le projet si ouvert
    };

    // Ouvrir un projet ferme les expériences
    const handleOpenProject = (index: number) => {
        setSelectedProject(index);
        setSelectedExperience(null); // Ferme l'expérience si ouverte
    };

    const experiences = [
        {
            title: "DECATHLON LOGISTICS",
            period: "Juillet - Aout 2025",
            summary: "Opérateur de commandes en logistique",
            description: `
Dans le cadre de ma première année de cycle ingénieur à l’ESAIP, j’ai effectué une expérience professionnelle de 7 semaines au sein du centre logistique **Decathlon** de Getafe, en Espagne.  

Au cours de cette expérience, j’ai pu réaliser différentes missions logistiques : réception, préparation de commandes, gestion de stocks. Ces missions ont pu se réaliser par l’apprentissage de différents outils logistiques tels que le transpalette électrique ou le Symbol.  

Au-delà des aspects techniques, cette expérience m’a permis de progresser la maîtrise de mon espagnol, de renforcer mon adaptabilité, mon sens de l’organisation et mon autonomie.  


1. Compétences techniques

a) Utilisation d’outils logistiques
•   Maîtrise du transpalette T-20 : compétence essentielle en manutention pour déplacer des charges lourdes efficacement et en sécurité.
•   Utilisation du Symbol pour la gestion des stocks : compétence en informatique logistique, saisie de données et suivi des flux de produits.
•   Utilisation de la plastifieuse pour sécuriser les palettes : savoir-faire en emballage et préparation des expéditions.

b) Gestion des stocks
•   Procédures de réception, étiquetage, rangement : aptitude à organiser les flux entrants de manière structurée.
•   Réalisation d’inventaires et de réapprovisionnements : capacité à maintenir un stock juste et à anticiper les besoins.

c) Sécurité
•   Respect des normes de sécurité et utilisation des EPI (Équipements de Protection Individuelle).
•   Adoption de gestes de manutention appropriés.

2. Compétences transversales (soft skills)

a) Adaptabilité
•   Intégration dans un environnement culturel, linguistique et professionnel nouveau.
•   Résolution des difficultés administratives et adaptation aux situations imprévues.

b) Travail en équipe
•   Collaboration pour le port de charges lourdes, la gestion des incidents et le partage d’informations.

c) Autonomie et sens de l’organisation
•   Prise en charge de missions confiées rapidement, gestion du temps et planification autonome.
•   Capacité à organiser votre mode de fonctionnement pour optimiser l’efficacité.

d) Compétences linguistiques
•   Maîtrise de l’espagnol dans un cadre professionnel.
`

        },
        {
            title: "PAKER MEGGIT",
            period: "FEVRIER 2022",
            summary: "Stage en analyse de données et dashboards",
            description: `Compétences techniques
            
Ces compétences concernent directement la maîtrise d’outils et méthodes utilisés dans un environnement industriel et administratif :

a) Maîtrise des logiciels et outils numériques
•\tPower BI : création et optimisation de rapports interactifs, cartographie des utilisateurs et gestion des accès.
•\tExcel : manipulation avancée de données pour l’organisation et le traitement des informations.
•\tOutlook et Webex : communication et coordination avec les collaborateurs à distance.

b) Gestion de données et reporting
•\tCollecte et organisation de tables de données pour créer des rapports structurés.
•\tSynthèse et résumé des accès utilisateurs sur différents rapports et espaces de travail.
•\tRéflexion sur l’automatisation de la collecte de données via des API ou des scripts Python (Selenium).

c) Compréhension des processus industriels
•\tDécouverte des pôles de production, R&D et administration.
•\tAnalyse du fonctionnement des services et interactions inter-départements.


2. Compétences transversales

a) Autonomie et initiative
•\tCapacité à chercher des informations, réfléchir et expérimenter pour résoudre des problèmes sans résultats immédiats.
•\tGestion autonome du temps et des priorités pour mener à bien les missions.

b) Résolution de problèmes
•\tAnalyse des problèmes liés aux accès et à l’administration de Power BI.
•\tExploration de solutions techniques (API, scripts) malgré les contraintes d’accès.

c) Adaptabilité et apprentissage rapide
•\tPrise en main rapide de Power BI et d’outils collaboratifs.
•\tAdaptation à un environnement industriel et à la culture d’entreprise.

d) Communication et relationnel
•\tInteraction quotidienne avec la maître de stage et différents collaborateurs via les points « One-to-One ».
•\tParticipation à réunions inter-services, découverte des métiers et échanges d’informations.

e) Organisation et rigueur
•\tStructuration des données et rapports pour une vue globale et compréhensible.
•\tSuivi rigoureux des missions et gestion des tâches sur plusieurs semaines.
`
        },
    ];

    const volunteerProjects = [
        {
            title: "KARTON",
            img: kartonImg,
            description: `
Passionné de sport automobile, j’ai décidé de créer un événement permettant de réunir les passionnés, mais aussi de faire découvrir ce domaine à un public néophyte à bas prix. C’est ainsi qu’est né le projet Kart’ON. Ce projet avait pour ambition de réunir des étudiants des différentes écoles angevines autour du karting.

En parallèle, j’ai créé le club Kart’ON au sein de l’ESAIP dans le but de pérenniser le projet. Une centaine d’étudiants se sont alors réunis sur une piste automobile reconnue à l’international pour participer à une course d’endurance en équipe.

1. Compétences organisationnelles

a) Gestion de projet
•   Organisation complète d’un événement : définition du concept, planification des activités, préparation logistique et coordination des participants.
•   Création et suivi d’un calendrier de tâches pour respecter les délais et gérer les différentes étapes.
b) Communication professionnelle
•   Rédaction et gestion d’un dossier de sponsoring pour contacter des entreprises.
•   Relation avec la propriétaire de la piste automobile, les participants et les écoles partenaires.
•   Coordination avec collaborateurs externes issus d’autres écoles.
c) Compétences logistiques
•   Gestion des tee-shirts et supports matériels pour représenter le club.
•   Préparation d’une course intermédiaire pour tester l’organisation et les équipes.
d) Création visuelle et design
•   Conception des tee-shirts et collaboration avec un designer pour créer de nouveaux visuels.
•   Mise en place d’une identité visuelle cohérente pour l’événement et le club Kart’ON.

2. Compétences transversales

a) Leadership et gestion d’équipe
•   Encadrement et coordination de collaborateurs internes et externes.
•   Délégation de missions pour assurer la réussite des différentes activités.
b) Esprit d’équipe et coopération
•   Collaboration avec des étudiants de différentes écoles et disciplines.
•   Participation active dans toutes les phases du projet, en aidant les membres de l’équipe.
c) Autonomie et prise d’initiative
•   Organisation des activités, contact avec les partenaires et suivi administratif en autonomie.
•   Capacité à proposer des solutions pour contourner des difficultés (ex : conception d’une course intermédiaire).

` ,
        },
        {
            title: "Marathon relais étud'Angers",
            img: marathonImg,
            description: "En collaboration avec Laurent FAUVEAU, étudiants en cycle d’ingénieur à l’ESAIP dans lequel l’engagement associatif représente pour nous un engouement fort et Adhérents de l’Association de Coopération Sportive avec l’Afrique et Bamako (ACSAB) ainsi que d’Angers Terre d’Athlétisme (ATA), nous avons pour ambition de valoriser la vie étudiante à Angers, favoriser l’activité sportive et soutenir des projets solidaire à travers une manifestation sportive.\n\n" +
                "Ce projet, organisé par une vingtaine d’étudiants, consiste à organiser un marathon relais axé aux étudiants tout en restant ouvert à tous les publics. Celui-ci se déroulera le dimanche 8 octobre 2026, et s’agira d’un événement sans précédent réunissant un maximum de 4000 coureurs, par équipe de 3 à 6 personnes. Sur tout le long de ce parcours urbain, nous retrouverons les principaux sites de l’enseignement supérieur (UA, Arts et métiers, ESA, UCO et ESEO) et de nombreuses animations !\n\n" +
                "Compétences organisationnelles :\n" +
                "\n" +
                "•\tGestion de projet événementiel - planification d’un événement d’envergure (4000 participants, coordination de 20 étudiants).\n" +
                "•\tCommunication et relations publiques - promotion de l’événement, partenariats avec les écoles et institutions locales.\n" +
                "•\tLogistique sportive - gestion du parcours, de la sécurité, du matériel et de la coordination des équipes le jour J.\n" +
                "•\tGestion administrative - démarches auprès de la mairie, associations et organismes d’assurance.\n" +
                "•\tRecherche de financements et sponsoring - conception de dossiers partenaires, contact avec les entreprises locales.\n" +
                "•\tGestion d’équipe et coordination - répartition des rôles, animation de réunions, suivi des avancées.\n" +
                "\n" +
                "Compétences transversales :\n" +
                "\n" +
                "•\tLeadership - mobilisation et encadrement d’une équipe pluridisciplinaire.\n" +
                "•\tTravail d’équipe - collaboration avec d’autres étudiants et associations (ACSAB, ATA).\n" +
                "•\tOrganisation et rigueur - planification sur plusieurs mois, suivi de nombreuses tâches simultanées.\n" +
                "•\tAdaptabilité - gestion des imprévus administratifs, techniques ou humains.\n" +
                "•\tCommunication interpersonnelle - échanges avec les partenaires, collectivités et participants.\n" +
                "•\tSens de l’engagement et responsabilité - projet à vocation solidaire et citoyenne alliant sport et entraide.\n",
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className="bg-[#161616] text-white min-h-screen scroll-smooth">
            {/* Navbar */}
            <header className="sticky top-0 z-50">
                <div className="relative flex justify-center p-4 bg-black/30 backdrop-blur-md rounded-b-3xl shadow-lg">
                    <ul className="relative flex gap-6">
                        {["Accueil", "À propos", "Expériences", "Bénévolats", "Compétences"].map((item, idx) => (
                            <li key={idx} className="relative">
                                <a
                                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                                    className="relative px-4 py-2 rounded-full hover:bg-white/10 hover:text-gray-200 transition-all duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>


            {/* Hero */}
            <section
                id="accueil"
                className="h-screen flex flex-col justify-center items-center text-center px-4"
                data-aos="fade-up"
            >
                <h1 className="text-6xl font-extrabold mb-4 text-gray-100 tracking-tight">Bienvenue sur mon Portfolio !</h1>
                <h2 className="text-2xl text-gray-300 mb-6 font-light">
                    Je m'appelle Delvin, étudiant ingénieur spécialisé en IA
                </h2>

                {/* Bouton Télécharger CV */}
                <a
                    href="/CV-Delvin_TRAN.pdf"
                    download
                    className="bg-white/10 text-gray-100 px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/10 hover:scale-105"
                >
                    Télécharger mon CV
                </a>
            </section>

            {/* About */}
            <section
                id="àpropos"
                className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-12 px-8 py-16"
                data-aos="fade-right"
            >
                <div className="lg:w-1/2 leading-relaxed">
                    <h3 className="text-4xl font-bold mb-6 border-l-4 border-blue-500 pl-4">À propos de moi</h3>
                    <p className="mb-4 text-gray-300 text-lg">
                        Je m'appelle Delvin, je suis en 4ème année de cycle ingénieur en informatique et réseaux spécialisé en IA.
                    </p>
                    <p className="mb-4 text-gray-300">
                        Ces dernières années, j’ai eu des expériences très différentes mais toutes
                        marquantes : j’ai développé des outils d’aide à l’administration en stage chez Parker Meggitt,
                        renforcé mes compétences techniques et mon ouverture culturelle lors d’un Erasmus en Lituanie,
                        et plus récemment, à Madrid, chez Decathlon, j’ai travaillé dans un environnement logistique
                        complexe
                    </p>
                    <p className="mb-4 text-gray-300">
                        À côté de mes études, j’ai aussi créé mes propres projets. Par exemple, un
                        événement de karting étudiant qui a rassemblé plus de 100 participants. Aujourd’hui, l’événement
                        est mené à être pérennisé par d’autres étudiants angevins. En ce moment, je coorganise, avec une
                        équipe de 15 étudiants un marathon relais inter-écoles pour 2026. Ces expériences m’ont permis
                        de développer du leadership, de la créativité et surtout la capacité à fédérer une équipe autour
                        d’un objectif.
                    </p>
                    <p className="mb-4 text-gray-300">
                        Au départ, je pensais m’orienter vers la cybersécurité. Mais en avançant, j’ai
                        découvert ce qui me passionne vraiment : la création et l’innovation, notamment dans
                        l’intelligence artificielle. Je veux utiliser l’IA comme un terrain de jeu pour inventer et
                        construire de nouvelles solutions.
                    </p>
                </div>

                <div className="lg:w-1/2 flex flex-col items-center gap-8">
                    <div className="avatar relative group">
                        <div className="w-64 rounded-full ring ring-white/30 ring-offset-[#161616] ring-offset-4 transition-transform duration-500 group-hover:scale-105">
                            <img src={avatar} alt="Delvin" className="object-cover"/>
                        </div>
                    </div>

                    <div className="w-full max-w-md mt-4" data-aos="fade-up" data-aos-delay="200">
                        <h4 className="text-2xl font-bold mb-6 text-center">Mon Parcours</h4>
                        <ul className="relative border-l-2 border-gray-700 ml-4 space-y-10">
                            <li className="ml-8 relative">
                                <span className="absolute -left-[41px] top-1 w-6 h-6 bg-gray-800 border-4 border-white rounded-full"></span>
                                <h5 className="text-xl font-semibold text-white">2019</h5>
                                <p className="text-gray-400">Lycée David d'Angers (49)</p>
                            </li>
                            <li className="ml-8 relative">
                                <span className="absolute -left-[41px] top-1 w-6 h-6 bg-gray-800 border-4 border-white rounded-full"></span>
                                <h5 className="text-xl font-semibold text-white">2022</h5>
                                <p className="text-gray-400">Classe préparatoire intégrée ESAIP (49)</p>
                            </li>
                            <li className="ml-8 relative">
                                <span className="absolute -left-[41px] top-1 w-6 h-6 bg-blue-500 border-4 border-white rounded-full animate-pulse"></span>
                                <h5 className="text-xl font-semibold text-white">Aujourd'hui</h5>
                                <p className="text-gray-400">Cycle ingénieur en Informatique et Réseaux (49)</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Expériences */}
            <section
                id="expériences"
                className="min-h-screen px-4 flex flex-col items-center justify-center py-20 bg-gradient-to-b from-[#161616] to-[#1a1a1a]"
            >
                <h3 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    Mes Expériences
                </h3>

                {selectedExperience === null ? (
                    <ul className="space-y-8 w-full max-w-4xl">
                        {experiences.map((exp, idx) => (
                            <li
                                key={idx}
                                className="relative group border border-white/10 rounded-3xl p-8 bg-white/5 shadow-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
                                onClick={() => handleOpenExperience(idx)}
                                data-aos="fade-up"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.title}</h4>
                                    <span className="text-sm font-mono text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">{exp.period}</span>
                                </div>
                                <p className="text-gray-300 font-medium mb-2">{exp.summary}</p>
                                <p className="text-gray-500 text-sm mt-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Cliquez pour voir les détails
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div
                        key={`exp-${selectedExperience}`}
                        className="w-full max-w-5xl text-left rounded-3xl p-8 md:p-12 bg-[#1e1e1e] border border-white/10 shadow-2xl transition-all duration-500"
                        data-aos="zoom-in"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h4 className="text-3xl font-bold text-white">{experiences[selectedExperience].title}</h4>
                                <span className="text-blue-400 font-mono">{experiences[selectedExperience].period}</span>
                            </div>
                            <button
                                className="btn btn-circle btn-outline btn-sm text-white hover:bg-white hover:text-black transition-colors"
                                onClick={() => setSelectedExperience(null)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="prose prose-invert max-w-none whitespace-pre-line text-gray-300 leading-relaxed">
                            {experiences[selectedExperience].description}
                        </div>

                        <div className="flex justify-center mt-10">
                            <button
                                className="px-8 py-3 border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                                onClick={() => setSelectedExperience(null)}
                            >
                                Fermer les détails
                            </button>
                        </div>
                    </div>
                )}
            </section>

            {/* Projets bénévoles */}
            <section
                id="bénévolats"
                className="min-h-screen px-4 flex flex-col items-center justify-center py-20"
            >
                <h3 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    Projets Bénévoles
                </h3>

                {selectedProject === null ? (
                    <div className="grid lg:grid-cols-2 gap-8 w-full max-w-6xl">
                        {volunteerProjects.map((proj, idx) => (
                            <div
                                key={idx}
                                className="group bg-[#1e1e1e] border border-white/10 shadow-xl hover:shadow-blue-900/20 hover:border-blue-500/30 cursor-pointer transition-all duration-300 rounded-3xl overflow-hidden flex flex-col"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                                onClick={() => handleOpenProject(idx)}
                            >
                                <figure className="h-64 w-full overflow-hidden relative">
                                    <img
                                        src={proj.img}
                                        alt={proj.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
                                </figure>
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{proj.title}</h4>
                                        <p className="text-gray-400 line-clamp-3 text-sm">
                                            {proj.description.substring(0, 150)}...
                                        </p>
                                    </div>
                                    <div className="mt-6 flex items-center text-blue-400 text-sm font-bold uppercase tracking-wider">
                                        En savoir plus <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div
                        key={`proj-${selectedProject}`}
                        className="w-full max-w-5xl text-left rounded-3xl p-8 md:p-12 bg-[#1e1e1e] border border-white/10 shadow-2xl transition-all duration-500"
                        data-aos="zoom-in"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <h4 className="text-3xl font-bold text-white">{volunteerProjects[selectedProject].title}</h4>
                            <button
                                className="btn btn-circle btn-outline btn-sm text-white hover:bg-white hover:text-black transition-colors"
                                onClick={() => setSelectedProject(null)}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Affichage de l'image en grand dans le détail si souhaité */}
                        <img
                            src={volunteerProjects[selectedProject].img}
                            alt={volunteerProjects[selectedProject].title}
                            className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8 opacity-80"
                        />

                        <div className="prose prose-invert max-w-none whitespace-pre-line text-gray-300 leading-relaxed">
                            {volunteerProjects[selectedProject].description}
                        </div>

                        <div className="flex justify-center mt-10">
                            <button
                                className="px-8 py-3 border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                                onClick={() => setSelectedProject(null)}
                            >
                                Fermer les détails
                            </button>
                        </div>
                    </div>
                )}
            </section>

            {/* Compétences */}
            <section id="compétences"
                     className="min-h-screen py-20 px-8 flex flex-col items-center justify-center gap-16 bg-gradient-to-t from-[#161616] to-[#1a1a1a]">
                <h3 className="text-4xl font-bold mb-12">Mes Compétences</h3>
                <div className="flex flex-col lg:flex-row gap-16 w-full max-w-6xl justify-center items-start">
                    {/* Compétences Techniques */}
                    <div className="flex-1 flex flex-col items-center bg-white/5 p-8 rounded-3xl border border-white/10 w-full">
                        <h4 className="text-2xl font-semibold mb-8 text-blue-400">Techniques</h4>
                        <div className="flex flex-wrap justify-center gap-4">
                            {["PYTHON", "C++", "C", "HTML/CSS", "JS", "JAVA", "POWER BI", "BDD", "PS"].map((skill, idx) => (
                                <span key={idx} className="px-4 py-2 bg-white/10 rounded-lg font-mono text-sm hover:bg-white/20 transition cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        {/* Animation verticale conservée mais stylisée */}
                        <div className="overflow-hidden h-32 w-full relative mt-8 mask-gradient-y">
                            <div className="animate-scroll-vertical flex flex-col items-center absolute top-0 w-full">
                                {["PYTHON", "C++", "C", "HTML/CSS", "JS", "JAVA", "POWER BI", "BDD", "PS"].map((skill, idx) => (
                                    <span key={idx} className="text-xl font-bold mb-4 text-gray-500">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Compétences Transversales */}
                    <div className="flex-1 flex flex-col items-center bg-white/5 p-8 rounded-3xl border border-white/10 w-full">
                        <h4 className="text-2xl font-semibold mb-8 text-green-400">Transversales</h4>
                        <div className="flex flex-wrap justify-center gap-4">
                            {["COMMUNICATION", "TRAVAIL D'ÉQUIPE", "LEADERSHIP", "RÉSOLUTION", "ADAPTABILITÉ"].map((skill, idx) => (
                                <span key={idx} className="px-4 py-2 bg-white/10 rounded-lg font-mono text-sm hover:bg-white/20 transition cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="overflow-hidden h-32 w-full relative mt-8 mask-gradient-y">
                            <div className="animate-scroll-vertical flex flex-col items-center absolute top-0 w-full">
                                {["COMMUNICATION", "TRAVAIL D'ÉQUIPE", "LEADERSHIP", "RÉSOLUTION PROBLÈMES", "ADAPTABILITÉ", "PENSÉE CRITIQUE"].map((skill, idx) => (
                                    <span key={idx} className="text-xl font-bold mb-4 text-gray-500">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="footer p-10 bg-[#0f0f0f] text-gray-400 text-center border-t border-white/5">
                <p>© 2025 Delvin Portfolio. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default Accueil;