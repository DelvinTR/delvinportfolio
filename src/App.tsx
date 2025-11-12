import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import kartonImg from "./assets/projects/karton.png";
import marathonImg from "./assets/projects/marathon.png";

const Accueil: React.FC = () => {
    const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
•	Maîtrise du transpalette T-20 : compétence essentielle en manutention pour déplacer des charges lourdes efficacement et en sécurité.
•	Utilisation du Symbol pour la gestion des stocks : compétence en informatique logistique, saisie de données et suivi des flux de produits.
•	Utilisation de la plastifieuse pour sécuriser les palettes : savoir-faire en emballage et préparation des expéditions.

b) Gestion des stocks
•	Procédures de réception, étiquetage, rangement : aptitude à organiser les flux entrants de manière structurée.
•	Réalisation d’inventaires et de réapprovisionnements : capacité à maintenir un stock juste et à anticiper les besoins.

c) Sécurité
•	Respect des normes de sécurité et utilisation des EPI (Équipements de Protection Individuelle).
•	Adoption de gestes de manutention appropriés.

2. Compétences transversales (soft skills)

a) Adaptabilité
•	Intégration dans un environnement culturel, linguistique et professionnel nouveau.
•	Résolution des difficultés administratives et adaptation aux situations imprévues.

b) Travail en équipe
•	Collaboration pour le port de charges lourdes, la gestion des incidents et le partage d’informations.

c) Autonomie et sens de l’organisation
•	Prise en charge de missions confiées rapidement, gestion du temps et planification autonome.
•	Capacité à organiser votre mode de fonctionnement pour optimiser l’efficacité.

d) Compétences linguistiques
•	Maîtrise de l’espagnol dans un cadre professionnel.
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
•	Organisation complète d’un événement : définition du concept, planification des activités, préparation logistique et coordination des participants.
•	Création et suivi d’un calendrier de tâches pour respecter les délais et gérer les différentes étapes.
b) Communication professionnelle
•	Rédaction et gestion d’un dossier de sponsoring pour contacter des entreprises.
•	Relation avec la propriétaire de la piste automobile, les participants et les écoles partenaires.
•	Coordination avec collaborateurs externes issus d’autres écoles.
c) Compétences logistiques
•	Gestion des tee-shirts et supports matériels pour représenter le club.
•	Préparation d’une course intermédiaire pour tester l’organisation et les équipes.
d) Création visuelle et design
•	Conception des tee-shirts et collaboration avec un designer pour créer de nouveaux visuels.
•	Mise en place d’une identité visuelle cohérente pour l’événement et le club Kart’ON.

2. Compétences transversales

a) Leadership et gestion d’équipe
•	Encadrement et coordination de collaborateurs internes et externes.
•	Délégation de missions pour assurer la réussite des différentes activités.
b) Esprit d’équipe et coopération
•	Collaboration avec des étudiants de différentes écoles et disciplines.
•	Participation active dans toutes les phases du projet, en aidant les membres de l’équipe.
c) Autonomie et prise d’initiative
•	Organisation des activités, contact avec les partenaires et suivi administratif en autonomie.
•	Capacité à proposer des solutions pour contourner des difficultés (ex : conception d’une course intermédiaire).

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
        <div className="bg-[#161616] text-white min-h-screen">
            {/* Navbar */}
            <header className="sticky top-0 z-50">
                <div className="relative flex justify-center p-4 bg-black/30 backdrop-blur-md rounded-b-3xl">
                    <ul className="relative flex gap-6">
                        {["Accueil", "À propos", "Expériences", "Bénévolats", "Compétences"].map((item, idx) => (
                            <li key={idx} className="relative">
                                <a
                                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                                    className="relative px-4 py-2 rounded-full hover:bg-white/5 transition-colors duration-300"
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
                <h1 className="text-6xl font-extrabold mb-4 text-gray-100">Bienvenue sur mon Portfolio !</h1>
                <h2 className="text-2xl text-gray-300 mb-6">
                    Je m'appelle Delvin, étudiant ingénieur spécialisé en IA
                </h2>

                {/* Bouton Télécharger CV */}
                <a
                    href="/CV-Delvin_TRAN.pdf"
                    download
                    className="bg-white/10 text-gray-100 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors duration-300"
                >
                    Télécharger mon CV
                </a>
            </section>

            {/* About */}
            <section
                id="àpropos"
                className="h-screen flex flex-col lg:flex-row justify-center items-center gap-8 px-8"
                data-aos="fade-right"
            >
                <div className="lg:w-1/2">
                    <h3 className="text-3xl font-bold mb-4">À propos de moi</h3>
                    <p className="mb-4">
                        Je m'appelle Delvin, je suis en 4ème année de cycle ingénieur en informatique et réseaux spécialisé en IA.
                    </p>
                    <p className="mb-4">

                        Ces dernières années, j’ai eu des expériences très différentes mais toutes
                        marquantes : j’ai développé des outils d’aide à l’administration en stage chez Parker Meggitt,
                        renforcé mes compétences techniques et mon ouverture culturelle lors d’un Erasmus en Lituanie,
                        et plus récemment, à Madrid, chez Decathlon, j’ai travaillé dans un environnement logistique
                        complexe</p>
                    <p className="mb-4">À côté de mes études, j’ai aussi créé mes propres projets. Par exemple, un
                        événement de karting étudiant qui a rassemblé plus de 100 participants. Aujourd’hui, l’événement
                        est mené à être pérennisé par d’autres étudiants angevins. En ce moment, je coorganise, avec une
                        équipe de 15 étudiants un marathon relais inter-écoles pour 2026. Ces expériences m’ont permis
                        de développer du leadership, de la créativité et surtout la capacité à fédérer une équipe autour
                        d’un objectif.</p>
                    <p className="mb-4">Au départ, je pensais m’orienter vers la cybersécurité. Mais en avançant, j’ai
                        découvert ce qui me passionne vraiment : la création et l’innovation, notamment dans
                        l’intelligence artificielle. Je veux utiliser l’IA comme un terrain de jeu pour inventer et
                        construire de nouvelles solutions.</p>
                </div>

                <div className="lg:w-1/2 flex flex-col items-center gap-6">
                    <div className="avatar">
                        <div className="w-56 rounded-full ring ring-white/40 ring-offset-[#161616]/80 ring-offset-2">
                            <img src={"src/assets/projects/avatar.jpg"} alt="Delvin"/>
                        </div>
                    </div>

                    <div className="w-full max-w-md mt-8" data-aos="fade-up">
                        <h4 className="text-xl font-bold mb-4 text-center">Mon Parcours</h4>
                        <ul className="relative border-l border-gray-700 ml-4">
                            <li className="mb-10 ml-6">
                                <span className="absolute -left-3 w-6 h-6 bg-white rounded-full"></span>
                                <h5 className="text-lg font-semibold">2019</h5>
                                <p>Lycée David d'Angers (49)</p>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute -left-3 w-6 h-6 bg-white rounded-full"></span>
                                <h5 className="text-lg font-semibold">2022</h5>
                                <p>Classe préparatoire intégrée ESAIP (49)</p>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute -left-3 w-6 h-6 bg-white rounded-full"></span>
                                <h5 className="text-lg font-semibold">Aujourd'hui</h5>
                                <p>Cycle ingénieur en Informatique et Réseaux (49)</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Expériences */}
            <section
                id="expériences"
                className="min-h-screen px-4 flex flex-col items-center justify-center py-16"
                data-aos="fade-up"
            >
                <h3 className="text-3xl font-bold mb-10">Mes Expériences</h3>

                {selectedExperience === null ? (
                    <ul className="space-y-6 w-full max-w-4xl">
                        {experiences.map((exp, idx) => (
                            <li
                                key={idx}
                                className="relative border border-white/20 rounded-3xl p-6 bg-white/5 shadow-2xl hover:bg-white/10 transition cursor-pointer"
                                onClick={() => setSelectedExperience(idx)}
                                data-aos="fade-up"
                            >
                                <span
                                    className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full"></span>
                                <div className="ml-4">
                                    <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                                    <span className="text-sm text-gray-300">{exp.period}</span>
                                    <p className="mt-2 text-gray-300">{exp.summary}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div
                        className="w-full max-w-5xl text-left rounded-3xl p-12 bg-white/10 shadow-2xl transition-all duration-500"
                        data-aos="fade-up"
                    >
                        <h4 className="text-3xl font-bold mb-4">{experiences[selectedExperience].title}</h4>
                        <span
                            className="text-sm text-gray-300 mb-6 block">{experiences[selectedExperience].period}</span>
                        <p className="whitespace-pre-line text-lg mb-8 text-gray-100">
                            {experiences[selectedExperience].description}
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="btn btn-outline text-white rounded-3xl"
                                onClick={() => setSelectedExperience(null)}
                            >
                                Retour
                            </button>
                        </div>
                    </div>
                )}
            </section>

            {/* Projets bénévoles */}
            <section
                id="bénévolats"
                className="h-screen px-4 flex flex-col items-center justify-center py-16"
            >
                <h3 className="text-3xl font-bold mb-6">Projets Bénévoles</h3>

                {selectedProject === null ? (
                    <div className="grid lg:grid-cols-2 gap-6 w-full max-w-6xl">
                        {volunteerProjects.map((proj, idx) => (
                            <div
                                key={idx}
                                className="card bg-white/5 border border-white/20 shadow-2xl hover:bg-white/10 cursor-pointer transition p-4 rounded-3xl"
                                data-aos="fade-up"
                                onClick={() => setSelectedProject(idx)}
                            >
                                <figure>
                                    <img src={proj.img} alt={proj.title} className="rounded-t-lg"/>
                                </figure>
                                <div className="p-4">
                                    <h4 className="text-xl font-bold">{proj.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div
                        key={selectedProject} // forcer AOS à détecter le changement
                        className="w-full max-w-5xl text-left rounded-3xl p-12 bg-white/10 shadow-2xl transition-all duration-500"
                        data-aos="fade-up"
                    >
                        <h4 className="text-3xl font-bold mb-4">{volunteerProjects[selectedProject].title}</h4>
                        <p className="whitespace-pre-line text-lg mb-8 text-gray-300">{volunteerProjects[selectedProject].description}</p>
                        <div className="flex justify-center">
                            <button
                                className="btn btn-outline text-white rounded-3xl"
                                onClick={() => setSelectedProject(null)}
                            >
                                Retour
                            </button>
                        </div>
                    </div>
                )}
            </section>
            {/* Compétences */}
            <section id="compétences"
                     className="min-h-screen py-16 px-8 flex flex-col items-center justify-center gap-16">
                <h3 className="text-4xl font-bold mb-12">Mes Compétences</h3>
                <div className="flex flex-col lg:flex-row gap-16 w-full max-w-6xl justify-center items-center">
                    {/* Compétences Techniques */}
                    <div className="flex-1 flex flex-col items-center">
                        <h4 className="text-2xl font-semibold mb-6">Compétences Techniques</h4>
                        <div className="overflow-hidden h-32 w-64 relative">
                            <div className="animate-scroll-vertical flex flex-col justify-around absolute top-0 h-full">
                                {["PYTHON", "C++", "C", "HTML/CSS", "JS", "JAVA", "POWER BI", "BDD", "PS"].map((skill, idx) => (
                                    <span key={idx} className="text-3xl font-bold mb-4">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Compétences Transversales */}
                    <div className="flex-1 flex flex-col items-center">
                        <h4 className="text-2xl font-semibold mb-6">Compétences Transversales</h4>
                        <div className="overflow-hidden h-32 w-72 relative">
                            <div className="animate-scroll-vertical flex flex-col justify-around absolute top-0 h-full">
                                {["COMMUNICATION", "TRAVAIL D'ÉQUIPE", "LEADERSHIP", "RÉSOLUTION PROBLÈMES", "ADAPTABILITÉ", "PENSÉE CRITIQUE"].map((skill, idx) => (
                                    <span key={idx} className="text-3xl font-bold mb-4">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="footer p-10 bg-[#1f1f1f]/80 rounded-t-3xl text-center">
                <p>© 2025 Delvin Portfolio. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default Accueil;
