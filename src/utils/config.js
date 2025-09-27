export const CATEGORIES = [
    'Research & Development',
    'Artificial intelligence',
    'Services',
    'Software engineering',
    'Financial Services'
]

export const TYPES = [
    'Full time',
    'Part time',
    'internship',
    'Freelance',
]


export const ORDERS = [
    {label: 'Recommandation décroissante', sortBy: 'scoring', orderBy: 'desc'},
    {label: 'Recommandation croissante', sortBy: 'scoring', orderBy: 'asc'},
    {label: 'Recherche décroissante', sortBy: 'searching', orderBy: 'desc'},
    {label: 'Recherche croissante', sortBy: 'searching', orderBy: 'asc'},
    {label: 'Date décroissante', sortBy: 'created_at', orderBy: 'desc'},
    {label: 'Date croissante', sortBy: 'created_at', orderBy: 'asc'},
];


export const  DATESOPTIONS = [
    { label: '1 semaine', value: '1w' },
    { label: '2 semaines', value: '2w' },
    { label: '3 semaines', value: '3w' },
    { label: '1 mois', value: '1m' },
    { label: '2 mois', value: '2m' },
    { label: '3 mois', value: '3m' },
    { label: '4 mois', value: '4m' },
    { label: '5 mois', value: '5m' },
    { label: '6 mois', value: '6m' },
    { label: '1 année', value: '1y' },
    { label: '2 années', value: '2y' },
    { label: '3 années +', value: '3y' },
  ];
  
export const SALARY_RANGES = [
    { label: 'Moins de 30 000 €', value: '0-30000' },
    { label: '30 000 € - 50 000 €', value: '30000-50000' },
    { label: '50 000 € - 70 000 €', value: '50000-70000' },
    { label: '70 000 € - 100 000 €', value: '70000-100000' },
    { label: 'Plus de 100 000 €', value: '100000-' },
];

export const EXPERIENCE_LEVELS = [
    { label: 'Débutant (0-2 ans)', value: '0-2' },
    { label: 'Intermédiaire (2-5 ans)', value: '2-5' },
    { label: 'Expérimenté (5-10 ans)', value: '5-10' },
    { label: 'Senior (10+ ans)', value: '10-' },
];

export const REMOTE_OPTIONS = [
    { label: 'Télétravail possible', value: 'remote' },
    { label: 'Télétravail uniquement', value: 'remote_only' },
];