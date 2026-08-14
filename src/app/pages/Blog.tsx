import React from 'react';
import { useLang } from '../context/LangContext';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type Trans = { ES: string; EN: string; ET: string; DE: string };

type CategoryKey = 'research' | 'methodology' | 'industry' | 'case-study';

interface Post {
  id: string;
  category: CategoryKey;
  title: Trans;
  date: Trans;
  excerpt: Trans;
  content: Trans[];
  author: 'juan' | 'carlos';
  readingTime: number;
  imageUrl: string;
}

const AUTHORS: Record<Post['author'], { name: string; role: Trans; avatar: string }> = {
  juan: {
    name: 'Juan José Ramírez Chaves',
    role: {
      ES: 'Líder de Data Science',
      EN: 'Data Science Lead',
      ET: 'Andmeteaduse juht',
      DE: 'Leiter Data Science',
    },
    avatar: '/images/team/juan-ramirez.jpeg',
  },
  carlos: {
    name: 'Carlos Chacón',
    role: {
      ES: 'Gerente de Calidad',
      EN: 'Quality Manager',
      ET: 'Kvaliteedijuht',
      DE: 'Qualitätsmanager',
    },
    avatar: '/images/team/carlos-chacon.jpeg',
  },
};

const readTimeLabel = (m: number): Trans => ({
  ES: `${m} min de lectura`,
  EN: `${m} min read`,
  ET: `${m} min lugemist`,
  DE: `${m} Min. Lesezeit`,
});

const POSTS: Post[] = [
  {
    id: 'cultural-bias-multilingual-llms',
    category: 'research',
    title: {
      ES: 'El impacto del sesgo cultural en los LLMs multilingües',
      EN: 'The impact of cultural bias in multilingual LLMs',
      ET: 'Kultuurilise eelarvamuse mõju mitmekeelsetes LLM-ides',
      DE: 'Die Auswirkungen kultureller Voreingenommenheit in mehrsprachigen LLMs',
    },
    date: { ES: '12 jun 2026', EN: 'Jun 12, 2026', ET: '12. juuni 2026', DE: '12. Juni 2026' },
    excerpt: {
      ES: 'Por qué los datos de entrenamiento bilingües y la anotación cultural son cruciales para evitar respuestas sesgadas en modelos generativos.',
      EN: 'Why bilingual training data and cultural annotation are crucial to avoid biased responses in generative models.',
      ET: 'Miks on kakskeelsed treeningandmed ja kultuuriline anoteerimine olulised, et vältida eelarvamuslikke vastuseid generatiivsetes mudelites.',
      DE: 'Warum zweisprachige Trainingsdaten und kulturelle Annotation entscheidend sind, um verzerrte Antworten in generativen Modellen zu vermeiden.',
    },
    content: [
      {
        ES: 'Los modelos de lenguaje generativos reflejan los sesgos presentes en sus datos de entrenamiento. Cuando esos datos provienen mayoritariamente de contextos occidentales, las respuestas pierden precisión y neutralidad en otros idiomas y culturas.',
        EN: 'Generative language models reflect the biases present in their training data. When that data comes mostly from Western contexts, responses lose accuracy and neutrality in other languages and cultures.',
        ET: 'Generatiivsed keelemudelid peegeldavad oma treeningandmetes esinevaid eelarvamusi. Kui andmed pärinevad enamasti lääne kontekstist, kaotavad vastused täpsuse ja neutraalsuse teistes keeltes ja kultuurides.',
        DE: 'Generative Sprachmodelle spiegeln die Verzerrungen ihrer Trainingsdaten wider. Stammen die Daten überwiegend aus westlichen Kontexten, verlieren die Antworten in anderen Sprachen und Kulturen an Genauigkeit und Neutralität.',
      },
      {
        ES: 'En un estudio con más de 3.500 prompts en ocho idiomas, detectamos que las respuestas en lenguas de bajo recurso mostraban un 42% más de variabilidad y estereotipos culturales que las generadas en inglés.',
        EN: 'In a study with more than 3,500 prompts across eight languages, we found that responses in low-resource languages showed 42% more variability and cultural stereotypes than those generated in English.',
        ET: 'Rohkem kui 3500 päringuga kaheksas keeles tehtud uuringus leidsime, et väheste ressurssidega keelte vastused näitasid 42% rohkem varieeruvust ja kultuurilisi stereotüüpe kui inglise keeles loodud vastused.',
        DE: 'In einer Studie mit über 3.500 Prompts in acht Sprachen stellten wir fest, dass Antworten in ressourcenarmen Sprachen 42 % mehr Variabilität und kulturelle Stereotype aufwiesen als englisch generierte Antworten.',
      },
      {
        ES: 'La corrección no se resuelve solo con más traducción automática: requiere paneles de anotadores nativos que apliquen guías culturales contextuales, revisiones por pares y validación de expertos por dominio.',
        EN: 'Fixing this is not just a matter of more machine translation: it requires panels of native annotators applying contextual cultural guidelines, peer reviews, and domain-expert validation.',
        ET: 'Selle parandamine ei tähenda ainult rohkem masintõlget: vaja on kohalike keelte annoteerijate paneele, kes rakendavad kultuurikontekstiga juhiseid, kaaslaste ülevaateid ja valdkonnaekspertide kinnitust.',
        DE: 'Die Korrektur ist nicht nur eine Frage von mehr maschineller Übersetzung: Sie erfordert Panels muttersprachlicher Annotatoren mit kulturell kontextbezogenen Richtlinien, Peer-Reviews und domänenspezifische Expertenvalidierung.',
      },
      {
        ES: 'Concluimos que la sensibilidad cultural es hoy una ventaja competitiva medible. Las organizaciones que invierten en datos bilingües anotados por expertos reducen sesgos, mejoran la satisfacción del usuario y fortalecen su posición en mercados emergentes.',
        EN: 'We conclude that cultural sensitivity is now a measurable competitive advantage. Organizations investing in bilingual data annotated by experts reduce bias, improve user satisfaction, and strengthen their position in emerging markets.',
        ET: 'Järeldus: kultuuritundlikkus on tänapäeval mõõdetav konkurentsieelis. Ettevõtted, kes investeerivad ekspertide anoteeritud kakskeelsetesse andmetesse, vähendavad eelarvamusi, parandavad kasutajarahulolu ja tugevdavad oma positsiooni arenevatel turgudel.',
        DE: 'Fazit: Kulturelle Sensibilität ist heute ein messbarer Wettbewerbsvorteil. Organisationen, die in zweisprachige, von Experten annotierte Daten investieren, reduzieren Bias, verbessern die Nutzerzufriedenheit und stärken ihre Position in Schwellenmärkten.',
      },
    ],
    author: 'juan',
    readingTime: 7,
    imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'low-resource-language-benchmarks',
    category: 'research',
    title: {
      ES: 'Nuevos benchmarks para lenguas de bajo recurso',
      EN: 'New benchmarks for low-resource languages',
      ET: 'Uued benchmarkid väheste ressurssidega keeltele',
      DE: 'Neue Benchmarks für ressourcenarme Sprachen',
    },
    date: { ES: '3 jul 2026', EN: 'Jul 3, 2026', ET: '3. juuli 2026', DE: '3. Juli 2026' },
    excerpt: {
      ES: 'La mayoría de los benchmarks ignoran las lenguas con menos recursos. Así diseñamos una evaluación justa para 14 idiomas.',
      EN: 'Most benchmarks ignore low-resource languages. Here is how we designed a fair evaluation for 14 languages.',
      ET: 'Enamik benchmarke eirab väheste ressurssidega keeli. Nii kavandasime õiglase hindamise 14 keelele.',
      DE: 'Die meisten Benchmarks ignorieren ressourcenarme Sprachen. So entwickelten wir eine faire Evaluation für 14 Sprachen.',
    },
    content: [
      {
        ES: 'La mayoría de los benchmarks de evaluación de IA se concentran en inglés, lo que genera una falsa sensación de madurez en lenguas con menos recursos digitales.',
        EN: 'Most AI evaluation benchmarks focus on English, creating a false sense of maturity in languages with fewer digital resources.',
        ET: 'Enamik AI hindamisbenchmarke keskendub inglise keelele, luues vale mulje küpsusest keeltes, millel on vähem digitaalseid ressursse.',
        DE: 'Die meisten KI-Benchmarks konzentrieren sich auf Englisch und erzeugen ein falsches Gefühl von Reife bei Sprachen mit weniger digitalen Ressourcen.',
      },
      {
        ES: 'Diseñamos un conjunto de evaluación con 14 lenguas, entre ellas estonio, suajili y quechua, cubriendo tareas de NER, análisis de sentimiento y clasificación de intenciones.',
        EN: 'We designed an evaluation suite covering 14 languages, including Estonian, Swahili, and Quechua, across NER, sentiment analysis, and intent classification tasks.',
        ET: 'Kavandasime hindamiskomplekti 14 keelega, sealhulgas eesti, suahiili ja ketšua, hõlmates NER-i, sentimentide analüüsi ja kavatsuste klassifitseerimise ülesandeid.',
        DE: 'Wir entwickelten ein Evaluationsset für 14 Sprachen, darunter Estnisch, Swahili und Quechua, mit NER-, Sentiment- und Intent-Klassifikationsaufgaben.',
      },
      {
        ES: 'Cada ítem fue anotado por dos lingüistas nativos de forma independiente y validado por un tercero, alcanzando un acuerdo inter-anotador superior a 0.88 en todas las tareas.',
        EN: 'Each item was annotated independently by two native linguists and validated by a third, reaching inter-annotator agreement above 0.88 across all tasks.',
        ET: 'Iga üksuse märkisid iseseisvalt kaks emakeelset keeleteadlast ja kolmas kinnitas selle, saavutades kõigi ülesannete puhul annoteerijatevahelise kokkuleppe üle 0.88.',
        DE: 'Jedes Item wurde von zwei muttersprachlichen Linguisten unabhängig annotiert und von einem Dritten validiert – mit einer Inter-Annotator-Übereinstimmung von über 0,88 in allen Aufgaben.',
      },
      {
        ES: 'Los modelos reentrenados con estos datos mejoraron hasta un 34% en NER, demostrando que la anotación local es imprescindible para una evaluación honesta y una IA inclusiva.',
        EN: 'Models retrained with this data improved up to 34% on NER, proving that local annotation is essential for honest evaluation and inclusive AI.',
        ET: 'Nende andmetega ümber treenitud mudelid paranesid NER-is kuni 34%, tõestades, et kohalik anoteerimine on ausaks hindamiseks ja kaasavaks tehisintellektiks hädavajalik.',
        DE: 'Mit diesen Daten nachtrainierte Modelle verbesserten sich im NER um bis zu 34 % – der Beweis, dass lokale Annotation für ehrliche Evaluation und inklusive KI unverzichtbar ist.',
      },
    ],
    author: 'juan',
    readingTime: 6,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'multimodal-annotation-2026',
    category: 'research',
    title: {
      ES: 'El estado de la anotación multimodal en 2026',
      EN: 'The state of multimodal annotation in 2026',
      ET: 'Multimodaalse anoteerimise olukord 2026. aastal',
      DE: 'Der Stand der multimodalen Annotation 2026',
    },
    date: { ES: '5 ago 2026', EN: 'Aug 5, 2026', ET: '5. august 2026', DE: '5. August 2026' },
    excerpt: {
      ES: 'El 61% de los proyectos de anotación ya es multimodal. Claves para alinear texto, imagen y audio sin errores de grounding.',
      EN: '61% of annotation projects are already multimodal. Key insights for aligning text, image, and audio without grounding errors.',
      ET: '61% anoteerimisprojektidest on juba multimodaalsed. Võtmeteave teksti, pildi ja heli joondamiseks ilma ankurdusvigadeta.',
      DE: '61 % der Annotationsprojekte sind bereits multimodal. Schlüsselerkenntnisse für die Ausrichtung von Text, Bild und Audio ohne Grounding-Fehler.',
    },
    content: [
      {
        ES: 'El volumen de datos multimodales crece exponencialmente: imágenes, audio y video requieren ahora una alineación semántica que pocos equipos saben garantizar.',
        EN: 'Multimodal data volumes are growing exponentially: images, audio, and video now require semantic alignment that few teams know how to guarantee.',
        ET: 'Multimodaalsete andmete maht kasvab eksponentsiaalselt: pildid, heli ja video nõuavad nüüd semantilist joondust, mida vähesed meeskonnad oskavad tagada.',
        DE: 'Multimodale Datenmengen wachsen exponentiell: Bilder, Audio und Video erfordern inzwischen eine semantische Ausrichtung, die nur wenige Teams sicherstellen können.',
      },
      {
        ES: 'Nuestro análisis de mercado muestra que el 61% de los proyectos de anotación en 2026 incluye al menos dos modalidades, frente al 38% del año anterior.',
        EN: 'Our market analysis shows that 61% of annotation projects in 2026 include at least two modalities, up from 38% the year before.',
        ET: 'Meie turuanalüüs näitab, et 2026. aastal hõlmab 61% anoteerimisprojektidest vähemalt kahte modaalsust, võrreldes 38% eelmisel aastal.',
        DE: 'Unsere Marktanalyse zeigt, dass 61 % der Annotationsprojekte im Jahr 2026 mindestens zwei Modalitäten umfassen – gegenüber 38 % im Vorjahr.',
      },
      {
        ES: 'La clave está en definir ontologías compartidas entre modalidades y en aplicar esquemas de revisión cruzada donde el mismo evento se valide en texto, imagen y video.',
        EN: 'The key is defining shared ontologies across modalities and applying cross-review schemes where the same event is validated in text, image, and video.',
        ET: 'Võti on ühiste ontoloogiate määratlemine modaalsuste vahel ning ristülevaatuse skeemid, kus sama sündmust kinnitatakse tekstis, pildil ja videos.',
        DE: 'Der Schlüssel liegt in gemeinsamen Ontologien über Modalitäten hinweg und in Cross-Review-Schemata, bei denen dasselbe Ereignis in Text, Bild und Video validiert wird.',
      },
      {
        ES: 'Las empresas que adoptan esta disciplina reducen los errores de grounding y aceleran el despliegue de asistentes conversacionales y sistemas de visión avanzados.',
        EN: 'Companies adopting this discipline reduce grounding errors and accelerate the deployment of conversational assistants and advanced vision systems.',
        ET: 'Seda distsipliini rakendavad ettevõtted vähendavad ankurdusvigu ja kiirendavad vestlusassistentide ning arenenud nägemissüsteemide kasutuselevõttu.',
        DE: 'Unternehmen, die diese Disziplin übernehmen, reduzieren Grounding-Fehler und beschleunigen den Einsatz von Konversationsassistenten und fortschrittlichen Vision-Systemen.',
      },
    ],
    author: 'juan',
    readingTime: 8,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'iaa-sentiment-annotation',
    category: 'methodology',
    title: {
      ES: 'Mejorando el IAA en anotación de sentimientos',
      EN: 'Improving IAA in sentiment annotation',
      ET: 'IAA parandamine sentimentide annoteerimisel',
      DE: 'Verbesserung der IAA bei der Sentiment-Annotation',
    },
    date: { ES: '25 jun 2026', EN: 'Jun 25, 2026', ET: '25. juuni 2026', DE: '25. Juni 2026' },
    excerpt: {
      ES: 'Guía paso a paso para alcanzar un acuerdo inter-anotador superior a 0.90 en tareas subjetivas.',
      EN: 'A step-by-step guide to reaching inter-annotator agreement above 0.90 in subjective tasks.',
      ET: 'Samm-sammuline juhend annoteerijatevahelise kokkuleppe saavutamiseks üle 0.90 subjektiivsetes ülesannetes.',
      DE: 'Eine Schritt-für-Schritt-Anleitung für Inter-Annotator-Übereinstimmung über 0,90 bei subjektiven Aufgaben.',
    },
    content: [
      {
        ES: 'El acuerdo inter-anotador (IAA) es la métrica que separa una anotación confiable de una opinión personal camuflada de dato.',
        EN: 'Inter-annotator agreement (IAA) is the metric that separates reliable annotation from personal opinion disguised as data.',
        ET: 'Annoteerijatevaheline kokkulepe (IAA) on mõõdik, mis eraldab usaldusväärse anoteerimise isiklikust arvamusest, mida maskeeritakse andmena.',
        DE: 'Die Inter-Annotator-Übereinstimmung (IAA) ist die Kennzahl, die zuverlässige Annotation von persönlicher Meinung im Datengewand trennt.',
      },
      {
        ES: 'Nuestra guía parte de sesiones de calibración con ejemplos ancla, continúa con ciclos de anotación independiente y cierra con adjudicación por un tercer experto.',
        EN: 'Our guide starts with calibration sessions using anchor examples, continues with independent annotation rounds, and closes with adjudication by a third expert.',
        ET: 'Meie juhend algab kalibreerimissessioonidega ankur-näidete abil, jätkub iseseisvate anoteerimisvoorudega ja lõpeb kolmanda eksperdi otsusega.',
        DE: 'Unser Leitfaden beginnt mit Kalibrierungssitzungen anhand von Ankerbeispielen, setzt sich mit unabhängigen Annotationsrunden fort und endet mit der Adjudikation durch einen dritten Experten.',
      },
      {
        ES: 'En tareas subjetivas como el sentimiento, alcanzamos IAA superiores a 0.90 aplicando escalas de cinco niveles con etiquetas de intensidad explícitas y ejemplos por dominio.',
        EN: 'In subjective tasks such as sentiment, we reach IAA above 0.90 by applying five-level scales with explicit intensity labels and domain-specific examples.',
        ET: 'Subjektiivsetes ülesannetes, nagu sentiment, saavutame IAA üle 0.90, kasutades viietasemelisi skaalasid selgete intensiivsussiltide ja valdkonnapõhiste näidetega.',
        DE: 'Bei subjektiven Aufgaben wie Sentiment erreichen wir IAA-Werte über 0,90 durch fünfstufige Skalen mit expliziten Intensitätslabels und domänenspezifischen Beispielen.',
      },
      {
        ES: 'La clave: documentar cada desacuerdo, medir el Kappa de forma continua y reentrenar al equipo con los casos conflictivos en lugar de solo corregir la etiqueta.',
        EN: 'The key: document every disagreement, measure Kappa continuously, and retrain the team with conflicting cases instead of only fixing the label.',
        ET: 'Võti: dokumenteerida iga erimeelsus, mõõta Kappat pidevalt ja õpetada meeskonda konfliktsete juhtumitega, mitte ainult silti parandada.',
        DE: 'Der Schlüssel: jede Abweichung dokumentieren, Kappa kontinuierlich messen und das Team mit Konfliktfällen nachschulen – statt nur das Label zu korrigieren.',
      },
    ],
    author: 'carlos',
    readingTime: 5,
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'importance-of-native-linguists',
    category: 'methodology',
    title: {
      ES: 'La importancia de los lingüistas nativos',
      EN: 'The importance of native linguists',
      ET: 'Kohalike keeleteadlaste tähtsus',
      DE: 'Die Bedeutung von Muttersprachlern',
    },
    date: { ES: '10 jul 2026', EN: 'Jul 10, 2026', ET: '10. juuli 2026', DE: '10. Juli 2026' },
    excerpt: {
      ES: 'Analizamos la diferencia de calidad entre traducciones automatizadas y la validación por lingüistas nativos en 4.800 oraciones.',
      EN: 'We analyze the quality gap between automated translations and native-linguist validation across 4,800 sentences.',
      ET: 'Analüüsime kvaliteedilõhet automaattõlgete ja emakeelsete keeleteadlaste kinnituse vahel 4800 lause põhjal.',
      DE: 'Wir analysieren die Qualitätslücke zwischen automatisierten Übersetzungen und der Validierung durch Muttersprachler anhand von 4.800 Sätzen.',
    },
    content: [
      {
        ES: 'La traducción automática ha avanzado mucho, pero los registros, modismos y referencias culturales siguen escapándose de los modelos.',
        EN: 'Machine translation has come a long way, but registers, idioms, and cultural references still elude models.',
        ET: 'Masintõlge on kaugele jõudnud, kuid registrid, idiomaatilised väljendid ja kultuurilised viited jäävad mudelitele endiselt kättesaamatuks.',
        DE: 'Maschinelle Übersetzung ist weit fortgeschritten, doch Register, Redewendungen und kulturelle Referenzen entgehen den Modellen weiterhin.',
      },
      {
        ES: 'Comparamos 4.800 oraciones traducidas automáticamente contra versiones validadas por lingüistas nativos en cinco mercados europeos.',
        EN: 'We compared 4,800 machine-translated sentences against versions validated by native linguists across five European markets.',
        ET: 'Võrdlesime 4800 masintõlgitud lauset emakeelsete keeleteadlaste kinnitatud versioonidega viiel Euroopa turul.',
        DE: 'Wir verglichen 4.800 maschinell übersetzte Sätze mit von Muttersprachlern validierten Versionen in fünf europäischen Märkten.',
      },
      {
        ES: 'El 17% de las traducciones automáticas contenía errores pragmáticos que cambiaban el tono o la intención comercial del mensaje original.',
        EN: '17% of machine translations contained pragmatic errors that changed the tone or business intent of the original message.',
        ET: '17% masintõlgetest sisaldas pragmaatilisi vigu, mis muutsid algse sõnumi tooni või ärilist eesmärki.',
        DE: '17 % der maschinellen Übersetzungen enthielten pragmatische Fehler, die Ton oder Geschäftsabsicht der ursprünglichen Nachricht veränderten.',
      },
      {
        ES: 'La validación humana no es un costo extra: es el seguro de calidad que evita campañas malinterpretadas y datos de entrenamiento contaminados.',
        EN: 'Human validation is not an extra cost: it is the quality insurance that prevents misinterpreted campaigns and contaminated training data.',
        ET: 'Inimkinnitus ei ole lisakulu: see on kvaliteedikindlustus, mis hoiab ära valesti mõistetud kampaaniad ja saastunud treeningandmed.',
        DE: 'Menschliche Validierung ist keine Zusatzkosten: Sie ist die Qualitätsversicherung, die missverstandene Kampagnen und verunreinigte Trainingsdaten verhindert.',
      },
    ],
    author: 'carlos',
    readingTime: 6,
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'qa-active-monitoring',
    category: 'methodology',
    title: {
      ES: 'QA en pipelines de anotación: monitoreo activo',
      EN: 'QA in annotation pipelines: active monitoring',
      ET: 'QA anoteerimistorus: aktiivne monitooring',
      DE: 'QA in Annotations-Pipelines: aktives Monitoring',
    },
    date: { ES: '28 jul 2026', EN: 'Jul 28, 2026', ET: '28. juuli 2026', DE: '28. Juli 2026' },
    excerpt: {
      ES: 'Del muestreo aleatorio al monitoreo activo: cómo reducir un 40% el tiempo de QA y subir la precisión al 97.8%.',
      EN: 'From random sampling to active monitoring: cutting QA time by 40% and pushing accuracy to 97.8%.',
      ET: 'Juhuslikust valimist aktiivse monitooringuni: kuidas lühendada QA-aega 40% ja tõsta täpsus 97,8%-ni.',
      DE: 'Von der Zufallsstichprobe zum aktiven Monitoring: QA-Zeit um 40 % senken und Genauigkeit auf 97,8 % steigern.',
    },
    content: [
      {
        ES: 'El muestreo aleatorio tradicional detecta errores tarde y no explica dónde se concentran.',
        EN: 'Traditional random sampling detects errors late and does not explain where they concentrate.',
        ET: 'Traditsiooniline juhuslik valim tuvastab vead hilja ega selgita, kuhu need koondunud on.',
        DE: 'Traditionelle Zufallsstichproben entdecken Fehler zu spät und erklären nicht, wo sie sich konzentrieren.',
      },
      {
        ES: 'Proponemos un esquema de monitoreo activo: preguntas doradas intercaladas, análisis de drift por lote y revisión priorizada de los casos de baja confianza.',
        EN: 'We propose an active monitoring scheme: interleaved gold questions, per-batch drift analysis, and prioritized review of low-confidence cases.',
        ET: 'Pakume aktiivse monitooringu skeemi: vahele segatud kuldktisimused, partii-põhine triivi analüüs ja madala usaldusega juhtumite prioriseeritud ülevaatus.',
        DE: 'Wir schlagen ein aktives Monitoring vor: eingestreute Goldfragen, Drift-Analyse pro Batch und priorisierte Prüfung von Fällen mit geringer Konfidenz.',
      },
      {
        ES: 'En un proyecto piloto de 250.000 registros, este enfoque redujo en un 40% el tiempo de QA y elevó la precisión global del 94.2% al 97.8%.',
        EN: 'In a pilot project with 250,000 records, this approach cut QA time by 40% and raised overall accuracy from 94.2% to 97.8%.',
        ET: '250 000 kirjega pilootprojektis lühendas see lähenemine QA-aega 40% ja tõstis üldise täpsuse 94,2%-lt 97,8%-le.',
        DE: 'In einem Pilotprojekt mit 250.000 Datensätzen reduzierte dieser Ansatz die QA-Zeit um 40 % und steigerte die Gesamtgenauigkeit von 94,2 % auf 97,8 %.',
      },
      {
        ES: 'El resultado es un ciclo de retroalimentación continuo donde los anotadores reciben sus errores en tiempo real y las guías se actualizan semanalmente.',
        EN: 'The result is a continuous feedback loop where annotators receive their errors in real time and guidelines are updated weekly.',
        ET: 'Tulemuseks on pidev tagasisideahel, kus annoteerijad saavad oma vead reaalajas ja juhiseid uuendatakse iganädalaselt.',
        DE: 'Das Ergebnis ist eine kontinuierliche Feedback-Schleife: Annotatoren erhalten ihre Fehler in Echtzeit, Richtlinien werden wöchentlich aktualisiert.',
      },
    ],
    author: 'carlos',
    readingTime: 7,
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'data-annotation-trends-2026',
    category: 'industry',
    title: {
      ES: 'Tendencias de Anotación de Datos 2026',
      EN: 'Data Annotation Trends 2026',
      ET: 'Andmete anoteerimise trendid 2026',
      DE: 'Datenannotations-Trends 2026',
    },
    date: { ES: '18 jun 2026', EN: 'Jun 18, 2026', ET: '18. juuni 2026', DE: '18. Juni 2026' },
    excerpt: {
      ES: 'Datos sintéticos, RLHF aplicado y cumplimiento normativo: lo que define a la anotación de datos en 2026.',
      EN: 'Synthetic data, applied RLHF, and regulatory compliance: what defines data annotation in 2026.',
      ET: 'Sünteetilised andmed, rakendatud RLHF ja regulatiivne vastavus: mis määratleb andmete anoteerimise 2026. aastal.',
      DE: 'Synthetische Daten, angewendetes RLHF und regulatorische Compliance: Das prägt die Datenannotation 2026.',
    },
    content: [
      {
        ES: 'El 2026 consolida tres grandes tendencias: datos sintéticos con revisión humana, RLHF/RLVR aplicado y cumplimiento normativo como criterio de compra.',
        EN: '2026 consolidates three major trends: synthetic data with human review, applied RLHF/RLVR, and regulatory compliance as a purchasing criterion.',
        ET: '2026. aasta kinnistab kolm suurt trendi: sünteetilised andmed inimülevaatega, rakendatud RLHF/RLVR ja regulatiivne vastavus ostukriteeriumina.',
        DE: '2026 festigt drei große Trends: synthetische Daten mit menschlicher Prüfung, angewendetes RLHF/RLVR und regulatorische Compliance als Kaufkriterium.',
      },
      {
        ES: 'Los datos sintéticos aceleran los pipelines, pero sin supervisión experta generan fallos silenciosos que solo aparecen en producción.',
        EN: 'Synthetic data accelerates pipelines, but without expert oversight it produces silent failures that only appear in production.',
        ET: 'Sünteetilised andmed kiirendavad torustikke, kuid ilma ekspertjärelevalveta tekitavad need vaikseid tõrkeid, mis ilmnevad alles tootmises.',
        DE: 'Synthetische Daten beschleunigen Pipelines, erzeugen ohne Expertenaufsicht jedoch stille Fehler, die erst in der Produktion auftreten.',
      },
      {
        ES: 'La anotación humana se concentra cada vez más en los bordes del espectro: casos difíciles, preferencias de usuario y feedback sobre políticas de seguridad.',
        EN: 'Human annotation is increasingly concentrated at the edges of the spectrum: hard cases, user preferences, and safety-policy feedback.',
        ET: 'Inimlik anoteerimine koondub üha enam spektri äärtesse: keerulised juhtumid, kasutajaeelistused ja ohutuspoliitika tagasiside.',
        DE: 'Menschliche Annotation konzentriert sich zunehmend auf die Ränder des Spektrums: schwierige Fälle, Nutzerpräferenzen und Feedback zu Sicherheitsrichtlinien.',
      },
      {
        ES: 'Las empresas líderes compran anotación como servicio, no como commodity: exigen trazabilidad, métricas de acuerdo y equipos especializados por dominio.',
        EN: 'Leading companies buy annotation as a service, not as a commodity: they demand traceability, agreement metrics, and domain-specialized teams.',
        ET: 'Juhtivad ettevõtted ostavad anoteerimist teenusena, mitte toorainena: nad nõuavad jälgitavust, kokkuleppe mõõdikuid ja valdkonnaspetsiifilisi meeskondi.',
        DE: 'Führende Unternehmen kaufen Annotation als Dienstleistung, nicht als Ware: Sie verlangen Nachvollziehbarkeit, Übereinstimmungsmetriken und domänenspezialisierte Teams.',
      },
    ],
    author: 'juan',
    readingTime: 8,
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'computer-vision-logistics',
    category: 'industry',
    title: {
      ES: 'Visión por Computadora en la logística',
      EN: 'Computer Vision in logistics',
      ET: 'Arvutinägemine logistikas',
      DE: 'Computer Vision in der Logistik',
    },
    date: { ES: '21 jul 2026', EN: 'Jul 21, 2026', ET: '21. juuli 2026', DE: '21. Juli 2026' },
    excerpt: {
      ES: 'Casos de uso reales de cómo el etiquetado preciso de video mejora la seguridad y reduce pérdidas en las cadenas de suministro.',
      EN: 'Real use cases of how accurate video labeling improves safety and cuts losses in supply chains.',
      ET: 'Reaalsed kasutusjuhtumid, kuidas täpne videomärgistus parandab ohutust ja vähendab kahjusid tarneahelates.',
      DE: 'Reale Anwendungsfälle: Wie präzise Video-Kennzeichnung die Sicherheit erhöht und Verluste in Lieferketten senkt.',
    },
    content: [
      {
        ES: 'El etiquetado preciso de video está transformando la seguridad y la eficiencia en las cadenas de suministro.',
        EN: 'Accurate video labeling is transforming safety and efficiency in supply chains.',
        ET: 'Täpne videomärgistus muudab tarneahelate ohutust ja tõhusust.',
        DE: 'Präzise Video-Annotation verändert Sicherheit und Effizienz in Lieferketten.',
      },
      {
        ES: 'Implementamos anotación de bounding boxes y segmentación temporal para detección de daños en paquetes, trabajando con secuencias de 60 fps y condiciones de iluminación adversas.',
        EN: 'We implemented bounding boxes and temporal segmentation for package damage detection, working with 60fps sequences and challenging lighting conditions.',
        ET: 'Rakendasime pakendikahjustuste tuvastamiseks piirdekaste ja ajutist segmenteerimist, töötades 60 kaadrit sekundis seeriatega keerulistes valgustingimustes.',
        DE: 'Wir implementierten Bounding Boxes und zeitliche Segmentierung zur Erkennung von Paketschäden – mit 60-fps-Sequenzen und schwierigen Lichtverhältnissen.',
      },
      {
        ES: 'Los modelos entrenados redujeron los daños no detectados en un 23% y aceleraron la clasificación de incidencias de 12 minutos a menos de 40 segundos.',
        EN: 'Trained models cut undetected damage by 23% and sped up incident classification from 12 minutes to under 40 seconds.',
        ET: 'Treeningutega mudelid vähendasid märkamata kahjustusi 23% ja kiirendasid intsidentide klassifitseerimist 12 minutilt alla 40 sekundi.',
        DE: 'Trainierte Modelle reduzierten unentdeckte Schäden um 23 % und beschleunigten die Schadensklassifizierung von 12 Minuten auf unter 40 Sekunden.',
      },
      {
        ES: 'La lección: la anotación de video exige guías de oclusión, criterios de confianza entre frames y equipos con experiencia en percepción visual.',
        EN: 'The lesson: video annotation requires occlusion guidelines, cross-frame confidence criteria, and teams experienced in visual perception.',
        ET: 'Õppetund: videomärgistus nõuab katmisjuhiseid, kaadritevahelisi usalduskriteeriume ja visuaalse taju kogemusega meeskondi.',
        DE: 'Die Lehre: Video-Annotation erfordert Okklusionsrichtlinien, frameübergreifende Konfidenzkriterien und Teams mit Erfahrung in visueller Wahrnehmung.',
      },
    ],
    author: 'carlos',
    readingTime: 6,
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'healthtech-data-pipeline',
    category: 'case-study',
    title: {
      ES: 'Cómo escalar tu pipeline de datos con Vocdata',
      EN: 'How to scale your data pipeline with Vocdata',
      ET: 'Kuidas laiendada oma andmekanalit Vocdataga',
      DE: 'So skalieren Sie Ihre Daten-Pipeline mit Vocdata',
    },
    date: { ES: '15 jul 2026', EN: 'Jul 15, 2026', ET: '15. juuli 2026', DE: '15. Juli 2026' },
    excerpt: {
      ES: 'Cómo ayudamos a una startup de HealthTech a procesar 1M de registros médicos en 26 días con un 98.6% de precisión.',
      EN: 'How we helped a HealthTech startup process 1M medical records in 26 days with 98.6% accuracy.',
      ET: 'Kuidas aitasime HealthTechi idufirmal töödelda 1 miljon meditsiinikirjet 26 päevaga, täpsusega 98,6%.',
      DE: 'Wie wir einem HealthTech-Startup halfen, 1 Mio. medizinische Datensätze in 26 Tagen mit 98,6 % Genauigkeit zu verarbeiten.',
    },
    content: [
      {
        ES: 'Una startup de HealthTech necesitaba procesar un millón de registros médicos en 30 días para lanzar su asistente clínico.',
        EN: 'A HealthTech startup needed to process one million medical records in 30 days to launch its clinical assistant.',
        ET: 'HealthTechi idufirma pidi oma kliinilise assistendi käivitamiseks töötlema miljon meditsiinikirjet 30 päevaga.',
        DE: 'Ein HealthTech-Startup musste eine Million medizinischer Datensätze in 30 Tagen verarbeiten, um seinen klinischen Assistenten zu starten.',
      },
      {
        ES: 'Montamos un equipo de 45 anotadores con formación HIPAA, guías de desidentificación y doble validación por personal clínico.',
        EN: 'We assembled a team of 45 annotators with HIPAA training, de-identification guidelines, and double validation by clinical staff.',
        ET: 'Panasime kokku 45 annoteerijast koosneva meeskonna, kellel oli HIPAA-koolitus, deidentifitseerimise juhised ja kliinilise personali topeltkinnitus.',
        DE: 'Wir stellten ein Team von 45 Annotatoren mit HIPAA-Schulung, De-Identifikationsrichtlinien und doppelter Validierung durch klinisches Personal auf.',
      },
      {
        ES: 'Entregamos el 100% del volumen en 26 días, con un 98.6% de precisión y cero incidentes de privacidad auditados externamente.',
        EN: 'We delivered 100% of the volume in 26 days, with 98.6% accuracy and zero externally audited privacy incidents.',
        ET: 'Tarnisime 100% mahust 26 päevaga, täpsusega 98,6% ja null välise auditi käigus tuvastatud privaatsusjuhtumiga.',
        DE: 'Wir lieferten 100 % des Volumens in 26 Tagen – mit 98,6 % Genauigkeit und null extern geprüften Datenschutzvorfällen.',
      },
      {
        ES: 'El cliente escaló su asistente a tres mercados europeos y redujo su tiempo de preparación de datos de meses a semanas.',
        EN: 'The client scaled its assistant to three European markets and reduced data preparation time from months to weeks.',
        ET: 'Klient laiendas oma assistendi kolmele Euroopa turule ja lühendas andmeettevalmistuse aega kuudelt nädalatele.',
        DE: 'Der Kunde skalierte seinen Assistenten auf drei europäische Märkte und verkürzte die Datenaufbereitung von Monaten auf Wochen.',
      },
    ],
    author: 'carlos',
    readingTime: 6,
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ecommerce-catalog-annotation',
    category: 'case-study',
    title: {
      ES: 'De 50K a 2M: anotación de catálogos para e-commerce',
      EN: 'From 50K to 2M: catalog annotation for e-commerce',
      ET: '50K-st 2M-ni: kataloogide anoteerimine e-kaubanduseks',
      DE: 'Von 50K auf 2M: Katalog-Annotation für E-Commerce',
    },
    date: { ES: '3 ago 2026', EN: 'Aug 3, 2026', ET: '3. august 2026', DE: '3. August 2026' },
    excerpt: {
      ES: 'De 50.000 a 2 millones de imágenes: la anotación de catálogos que redujo las devoluciones de un minorista europeo en un 18%.',
      EN: 'From 50K to 2M images: the catalog annotation that cut a European retailer’s returns by 18%.',
      ET: '50 000-lt 2 miljonini: kataloogide anoteerimine, mis vähendas Euroopa jaemüüja tagastusi 18%.',
      DE: 'Von 50.000 auf 2 Millionen Bilder: Die Katalog-Annotation, die die Retouren eines europäischen Einzelhändlers um 18 % senkte.',
    },
    content: [
      {
        ES: 'Un minorista europeo necesitaba anotar 2 millones de imágenes de producto manteniendo consistencia en 12 categorías de su taxonomía.',
        EN: 'A European retailer needed to annotate 2 million product images while keeping consistency across 12 taxonomy categories.',
        ET: 'Euroopa jaemüüja vajas 2 miljoni tootepildi anoteerimist, säilitades järjepidevuse 12 taksonoomiakategoorias.',
        DE: 'Ein europäischer Einzelhändler musste 2 Millionen Produktbilder annotieren und dabei die Konsistenz über 12 Taxonomie-Kategorien wahren.',
      },
      {
        ES: 'Diseñamos un flujo en dos fases: clasificación de atributos por lingüistas y QA cruzado con muestras por nodo de la taxonomía.',
        EN: 'We designed a two-phase flow: attribute classification by linguists and cross-QA with samples per taxonomy node.',
        ET: 'Kavandasime kahefaasilise voo: atribuutide klassifitseerimine keeleteadlaste poolt ja rist-QA valimitega igast taksonoomia sõlmest.',
        DE: 'Wir entwarfen einen zweiphasigen Ablauf: Attributklassifikation durch Linguisten und Cross-QA mit Stichproben pro Taxonomie-Knoten.',
      },
      {
        ES: 'Alcanzamos un 99.1% de precisión en atributos críticos como color, material y talla, reduciendo las devoluciones por descripción incorrecta en un 18%.',
        EN: 'We reached 99.1% accuracy on critical attributes such as color, material, and size, cutting wrong-description returns by 18%.',
        ET: 'Saavutasime kriitiliste atribuutide (värv, materjal, suurus) puhul 99,1% täpsuse, vähendades vale kirjelduse tõttu tagastusi 18%.',
        DE: 'Wir erreichten 99,1 % Genauigkeit bei kritischen Attributen wie Farbe, Material und Größe und reduzierten Retouren durch falsche Beschreibungen um 18 %.',
      },
      {
        ES: 'La taxonomía anotada se reutilizó para entrenar un clasificador propio que ahora procesa 50.000 imágenes diarias.',
        EN: 'The annotated taxonomy was reused to train an in-house classifier that now processes 50,000 images daily.',
        ET: 'Annoteeritud taksonoomiat kasutati oma klassifikaatori treenimiseks, mis töötleb nüüd 50 000 pilti päevas.',
        DE: 'Die annotierte Taxonomie wurde zum Training eines eigenen Klassifikators genutzt, der heute 50.000 Bilder täglich verarbeitet.',
      },
    ],
    author: 'juan',
    readingTime: 5,
    imageUrl: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'rlhf-vs-dpo-alignment',
    category: 'research',
    title: {
      ES: 'RLHF vs DPO: qué técnica de alineación produce datos más confiables',
      EN: 'RLHF vs DPO: which alignment technique produces more reliable data',
      ET: 'RLHF vs DPO: milline joondamistehnika annab usaldusväärsemaid andmeid',
      DE: 'RLHF vs DPO: Welche Alignment-Technik liefert zuverlässigere Daten',
    },
    date: { ES: '20 jun 2026', EN: 'Jun 20, 2026', ET: '20. juuni 2026', DE: '20. Juni 2026' },
    excerpt: {
      ES: 'Comparamos RLHF y DPO en 12 tareas multilingües para medir preferencias humanas, consistencia y el costo real de la anotación.',
      EN: 'We compare RLHF and DPO across 12 multilingual tasks to measure human preferences, consistency, and the real cost of annotation.',
      ET: 'Võrdleme RLHF-i ja DPO-d 12 mitmekeelses ülesandes, et mõõta inimlikke eelistusi, järjepidevust ja anoteerimise tegelikku kulu.',
      DE: 'Wir vergleichen RLHF und DPO in 12 mehrsprachigen Aufgaben, um menschliche Präferenzen, Konsistenz und die realen Annotationskosten zu messen.',
    },
    content: [
      {
        ES: 'La alineación de modelos determina la calidad final de un producto de IA, y con ella la estrategia de anotación. RLHF requiere miles de comparaciones por pares anotadas por humanos, mientras que DPO entrena directamente sobre preferencias ya etiquetadas.',
        EN: 'Model alignment determines the final quality of an AI product, and with it the annotation strategy. RLHF requires thousands of human-annotated pairwise comparisons, while DPO trains directly on already-labeled preferences.',
        ET: 'Mudeli joondamine määrab AI-toote lõpliku kvaliteedi ja koos sellega anoteerimisstrateegia. RLHF nõuab tuhandeid inimeste anoteeritud paaripõhiseid võrdlusi, samas kui DPO treenib otse juba märgistatud eelistuste pealt.',
        DE: 'Die Modellausrichtung bestimmt die Endqualität eines KI-Produkts – und damit die Annotationsstrategie. RLHF erfordert Tausende menschlich annotierter Paarvergleiche, während DPO direkt auf bereits gelabelten Präferenzen trainiert.',
      },
      {
        ES: 'Nuestro estudio de 2026 comparó ambas técnicas en 12 tareas y 5 idiomas: DPO redujo el costo de anotación en un 38%, pero RLHF mantuvo una ventaja del 9% en preferencia humana sobre respuestas médicas y legales.',
        EN: 'Our 2026 study compared both techniques across 12 tasks and 5 languages: DPO cut annotation cost by 38%, but RLHF kept a 9% advantage in human preference on medical and legal responses.',
        ET: 'Meie 2026. aasta uuring võrdles mõlemat tehnikat 12 ülesandes ja 5 keeles: DPO vähendas anoteerimiskulu 38%, kuid RLHF säilitas meditsiini- ja õigusvaldkonna vastuste puhul 9% eelise inimeelistuses.',
        DE: 'Unsere Studie 2026 verglich beide Techniken in 12 Aufgaben und 5 Sprachen: DPO senkte die Annotationskosten um 38 %, RLHF behielt jedoch bei medizinischen und rechtlichen Antworten einen Vorsprung von 9 % in der menschlichen Präferenz.',
      },
      {
        ES: 'La diferencia se explica por la granularidad: las comparaciones por pares capturan matices que una etiqueta de preferencia única pierde en dominios de alto riesgo.',
        EN: 'The difference lies in granularity: pairwise comparisons capture nuances that a single preference label loses in high-risk domains.',
        ET: 'Erinevus peitub detailsuses: paaripõhised võrdlused tabavad nüansse, mille üksik eelistussilt kõrge riskiga valdkondades kaotab.',
        DE: 'Der Unterschied liegt in der Granularität: Paarvergleiche erfassen Nuancen, die ein einzelnes Präferenzlabel in Hochrisikodomänen verliert.',
      },
      {
        ES: 'Recomendamos un enfoque híbrido: DPO para tareas de volumen con guías estrictas y RLHF selectivo para dominios regulados, siempre con paneles de anotadores certificados.',
        EN: 'We recommend a hybrid approach: DPO for high-volume tasks with strict guidelines and selective RLHF for regulated domains, always with certified annotator panels.',
        ET: 'Soovitame hübriidlähenemist: DPO suuremahuliste ülesannete jaoks rangeid juhiseid kasutades ning valikulist RLHF-i reguleeritud valdkondade jaoks, alati sertifitseeritud annoteerijate paneelidega.',
        DE: 'Wir empfehlen einen hybriden Ansatz: DPO für mengenintensive Aufgaben mit strengen Richtlinien und selektives RLHF für regulierte Domänen – stets mit zertifizierten Annotator-Panels.',
      },
    ],
    author: 'juan',
    readingTime: 9,
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'annotation-scaling-laws',
    category: 'research',
    title: {
      ES: 'Leyes de escala en anotación: cuando la calidad supera a la cantidad',
      EN: 'Scaling laws in annotation: when quality beats quantity',
      ET: 'Mastaabiseadused anoteerimises: kui kvaliteet ületab kvantiteedi',
      DE: 'Skalierungsgesetze in der Annotation: wenn Qualität Quantität schlägt',
    },
    date: { ES: '29 jul 2026', EN: 'Jul 29, 2026', ET: '29. juuli 2026', DE: '29. Juli 2026' },
    excerpt: {
      ES: 'Miles de datos mal etiquetados no compensan cientos perfectos: evidencia de 9 proyectos industriales.',
      EN: 'Thousands of poorly labeled data points do not compensate for hundreds of perfect ones: evidence from 9 industrial projects.',
      ET: 'Tuhanded halvasti märgistatud andmepunktid ei korva sadu ideaalseid: tõendid 9 tööstusprojektist.',
      DE: 'Tausende schlecht gelabelte Datenpunkte kompensieren keine Hunderte perfekter: Belege aus 9 Industrieprojekten.',
    },
    content: [
      {
        ES: 'Las leyes de escala han dominado la narrativa de la IA: más datos, más parámetros, mejor rendimiento. Pero la anotación sigue un comportamiento inverso en la práctica industrial.',
        EN: 'Scaling laws have dominated the AI narrative: more data, more parameters, better performance. But annotation behaves inversely in industrial practice.',
        ET: 'Mastaabiseadused on AI narratiivis domineerinud: rohkem andmeid, rohkem parameetreid, parem jõudlus. Kuid anoteerimine käitub tööstuspraktikas vastupidiselt.',
        DE: 'Skalierungsgesetze dominieren die KI-Erzählung: mehr Daten, mehr Parameter, bessere Leistung. In der industriellen Praxis verhält sich Annotation jedoch umgekehrt.',
      },
      {
        ES: 'En 9 proyectos con 40 millones de registros, redujimos el tamaño del dataset en un 25% mediante priorización por dificultad y las métricas objetivo mejoraron un 11% de media.',
        EN: 'Across 9 projects with 40 million records, we reduced dataset size by 25% through difficulty-based prioritization, and target metrics improved by 11% on average.',
        ET: '9 projektis, kokku 40 miljoni kirjega, vähendasime andmekomplekti raskuspõhise prioriseerimisega 25% ja sihtmõõdikud paranesid keskmiselt 11%.',
        DE: 'In 9 Projekten mit 40 Millionen Datensätzen reduzierten wir die Datensatzgröße durch schwierigkeitsbasierte Priorisierung um 25 % – die Zielmetriken verbesserten sich im Schnitt um 11 %.',
      },
      {
        ES: 'La clave es la distribución: los casos raros y difíciles concentran el aprendizaje, mientras que los fáciles aportan redundancia costosa.',
        EN: 'The key is distribution: rare and difficult cases concentrate learning, while easy ones add costly redundancy.',
        ET: 'Võti on jaotuses: haruldased ja rasked juhtumid koondavad õppimise, samas kui kerged lisavad kallist üleliigsust.',
        DE: 'Der Schlüssel liegt in der Verteilung: seltene und schwierige Fälle konzentrieren das Lernen, einfache erzeugen teure Redundanz.',
      },
      {
        ES: 'Conclusión para equipos de datos: anotar menos, anotar mejor y medir la calidad antes de escalar el volumen.',
        EN: 'Takeaway for data teams: annotate less, annotate better, and measure quality before scaling volume.',
        ET: 'Järeldus andmemeeskondadele: anoteerige vähem, anoteerige paremini ja mõõtke kvaliteeti enne mahu suurendamist.',
        DE: 'Fazit für Datenteams: weniger annotieren, besser annotieren und Qualität messen, bevor man das Volumen skaliert.',
      },
    ],
    author: 'juan',
    readingTime: 7,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'vision-robustness-adversarial',
    category: 'research',
    title: {
      ES: 'Robustez en visión por computadora: el costo de los casos adversariales',
      EN: 'Robustness in computer vision: the cost of adversarial cases',
      ET: 'Arvutinägemise robustsus: adversaalsete juhtumite hind',
      DE: 'Robustheit in der Computer Vision: die Kosten adversarischer Fälle',
    },
    date: { ES: '24 ago 2026', EN: 'Aug 24, 2026', ET: '24. august 2026', DE: '24. August 2026' },
    excerpt: {
      ES: 'Pequeños artefactos en imágenes pueden derrumbar modelos: estudio de 1.2M de imágenes con oclusión, niebla y adversarios.',
      EN: 'Tiny image artifacts can collapse models: a study of 1.2M images with occlusion, fog, and adversaries.',
      ET: 'Väikesed pildiartefaktid võivad mudeleid kokku kukutada: uuring 1,2 miljoni pildi peal oklusiooni, udu ja adversaridega.',
      DE: 'Winzige Bildartefakte können Modelle zum Einsturz bringen: eine Studie mit 1,2 Mio. Bildern mit Okklusion, Nebel und Adversaren.',
    },
    content: [
      {
        ES: 'Los modelos de visión fallan de forma silenciosa ante oclusiones parciales, iluminación extrema o patrones adversariales imperceptibles para el ojo humano.',
        EN: 'Vision models fail silently under partial occlusion, extreme lighting, or adversarial patterns imperceptible to the human eye.',
        ET: 'Nägemismudelid ebaõnnestuvad vaikselt osalise katmise, äärmusliku valgustuse või inimsilmale märkamatu adversiaalse mustri korral.',
        DE: 'Vision-Modelle versagen stillschweigend bei teilweiser Okklusion, extremen Lichtverhältnissen oder für das menschliche Auge unsichtbaren adversarischen Mustern.',
      },
      {
        ES: 'Evaluamos 1.2M de imágenes anotadas con estas tres perturbaciones: la precisión cayó hasta 31 puntos en los peores escenarios, incluso con modelos state-of-the-art.',
        EN: 'We evaluated 1.2M images annotated with these three perturbations: accuracy dropped by up to 31 points in the worst scenarios, even for state-of-the-art models.',
        ET: 'Hindasime 1,2 miljonit pilti, mis on märgistatud nende kolme häirega: täpsus langes halvimate stsenaariumide puhul kuni 31 punkti, isegi tipptasemel mudelite puhul.',
        DE: 'Wir evaluierten 1,2 Mio. mit diesen drei Störungen annotierte Bilder: Die Genauigkeit fiel in den schlimmsten Szenarien um bis zu 31 Punkte – selbst bei State-of-the-Art-Modellen.',
      },
      {
        ES: 'La mitigación exige anotación de segmentación de oclusión, etiquetado de condiciones ambientales y entrenamiento adversarial guiado por humanos.',
        EN: 'Mitigation requires occlusion segmentation annotation, environmental condition labeling, and human-guided adversarial training.',
        ET: 'Leevendus nõuab oklusiooni segmenteerimise anoteerimist, keskkonnatingimuste märgistamist ja inimese juhitud adversiaalset treeningut.',
        DE: 'Gegenmaßnahmen erfordern Okklusions-Segmentierung, Kennzeichnung von Umgebungsbedingungen und menschlich gesteuertes adversarisches Training.',
      },
      {
        ES: 'Las empresas que incorporan estos casos desde el inicio reducen incidentes en producción y reentrenamientos costosos.',
        EN: 'Companies that include these cases from day one reduce production incidents and costly retraining.',
        ET: 'Ettevõtted, kes lisavad need juhtumid algusest peale, vähendavad tootmisintsidente ja kulukat ümbertreeningut.',
        DE: 'Unternehmen, die diese Fälle von Anfang an einbeziehen, reduzieren Produktionsausfälle und kostspieliges Nachtraining.',
      },
    ],
    author: 'carlos',
    readingTime: 6,
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dicom-healthtech-annotation',
    category: 'methodology',
    title: {
      ES: 'Anotación DICOM para HealthTech: guía práctica de imágenes médicas',
      EN: 'DICOM annotation for HealthTech: a practical medical imaging guide',
      ET: 'DICOM-anoteerimine HealthTechi jaoks: praktiline meditsiinipiltide juhend',
      DE: 'DICOM-Annotation für HealthTech: ein praktischer Leitfaden für medizinische Bildgebung',
    },
    date: { ES: '8 jul 2026', EN: 'Jul 8, 2026', ET: '8. juuli 2026', DE: '8. Juli 2026' },
    excerpt: {
      ES: 'Formatos, anonimización y validación clínica: cómo anotar radiografías y tomografías sin comprometer la privacidad.',
      EN: 'Formats, anonymization, and clinical validation: how to annotate X-rays and CT scans without compromising privacy.',
      ET: 'Formaadid, anonümiseerimine ja kliiniline valideerimine: kuidas anoteerida röntgen- ja CT-pilte privaatsust ohustamata.',
      DE: 'Formate, Anonymisierung und klinische Validierung: Röntgen- und CT-Aufnahmen annotieren, ohne die Privatsphäre zu gefährden.',
    },
    content: [
      {
        ES: 'La anotación de imágenes médicas exige rigor técnico y normativo: cada archivo DICOM contiene metadatos de paciente que deben eliminarse antes de cualquier flujo de trabajo.',
        EN: 'Medical image annotation demands technical and regulatory rigor: every DICOM file contains patient metadata that must be stripped before any workflow.',
        ET: 'Meditsiinipiltide anoteerimine nõuab tehnilist ja regulatiivset rangust: iga DICOM-fail sisaldab patsiendi metaandmeid, mis tuleb enne mis tahes töövoogu eemaldada.',
        DE: 'Die Annotation medizinischer Bilder erfordert technische und regulatorische Sorgfalt: Jede DICOM-Datei enthält Patienten-Metadaten, die vor jedem Workflow entfernt werden müssen.',
      },
      {
        ES: 'Diseñamos un pipeline en tres fases: desidentificación automática con doble verificación, anotación por técnicos certificados y validación por radiólogos con muestreo estadístico.',
        EN: 'We designed a three-phase pipeline: automated de-identification with double verification, annotation by certified technicians, and radiologist validation with statistical sampling.',
        ET: 'Kavandasime kolmeetapilise torustiku: automaatne deidentifitseerimine topeltkontrolliga, sertifitseeritud tehnikute anoteerimine ja radioloogide valideerimine statistilise valimiga.',
        DE: 'Wir entwarfen eine dreistufige Pipeline: automatische De-Identifikation mit Doppelprüfung, Annotation durch zertifizierte Techniker und Validierung durch Radiologen mit statistischer Stichprobe.',
      },
      {
        ES: 'En proyectos de tomografía y radiografía logramos precisiones de segmentación superiores a 0.95 de Dice, manteniendo auditorías de privacidad sin hallazgos.',
        EN: 'In CT and X-ray projects we reached segmentation accuracies above 0.95 Dice, while privacy audits returned zero findings.',
        ET: 'CT- ja röntgenprojektides saavutasime segmentimistäpsuse üle 0,95 Dice, samas kui privaatsusauditid andsid null leide.',
        DE: 'In CT- und Röntgenprojekten erreichten wir Segmentierungsgenauigkeiten über 0,95 Dice, während Datenschutzaudits ohne Befunde blieben.',
      },
      {
        ES: 'Recomendamos guías de consenso por órgano y patología, y la documentación de cada discrepancia para auditar la trazabilidad completa.',
        EN: 'We recommend consensus guidelines per organ and pathology, documenting every discrepancy for full traceability.',
        ET: 'Soovitame konsensuse juhiseid elundi ja patoloogia kaupa ning iga lahknevuse dokumenteerimist täielikuks jälgitavuseks.',
        DE: 'Wir empfehlen Konsensrichtlinien pro Organ und Pathologie sowie die Dokumentation jeder Abweichung für vollständige Nachvollziehbarkeit.',
      },
    ],
    author: 'carlos',
    readingTime: 8,
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'clinical-annotation-consensus',
    category: 'methodology',
    title: {
      ES: 'Pautas de anotación clínica: el rol del consenso y la adjudicación',
      EN: 'Clinical annotation guidelines: the role of consensus and adjudication',
      ET: 'Kliinilise anoteerimise juhised: konsensuse ja otsustamise roll',
      DE: 'Klinische Annotationsrichtlinien: die Rolle von Konsens und Adjudikation',
    },
    date: { ES: '17 ago 2026', EN: 'Aug 17, 2026', ET: '17. august 2026', DE: '17. August 2026' },
    excerpt: {
      ES: 'Cuándo re-anotar, cuándo arbitrar y cuántas rondas de consenso bastan: un marco cuantitativo.',
      EN: 'When to re-annotate, when to arbitrate, and how many consensus rounds are enough: a quantitative framework.',
      ET: 'Millal uuesti anoteerida, millal arbitreerida ja mitu konsensusevooru piisab: kvantitatiivne raamistik.',
      DE: 'Wann neu annotieren, wann arbitrieren und wie viele Konsensrunden reichen: ein quantitativer Rahmen.',
    },
    content: [
      {
        ES: 'Las discrepancias entre anotadores no son errores: son información sobre la dificultad de la tarea y la claridad de las pautas.',
        EN: 'Disagreements between annotators are not errors: they are information about task difficulty and guideline clarity.',
        ET: 'Annoteerijate lahkarvamused ei ole vead: need on teave ülesande raskuse ja juhiste selguse kohta.',
        DE: 'Uneinigkeit zwischen Annotatoren ist kein Fehler: Sie ist Information über Aufgabenschwierigkeit und Richtlinienklarheit.',
      },
      {
        ES: 'Desarrollamos un marco para decidir entre re-anotación, adjudicación o actualización de guías basado en la tasa de desacuerdo por ítem y por anotador.',
        EN: 'We developed a framework to decide between re-annotation, adjudication, or guideline updates based on per-item and per-annotator disagreement rates.',
        ET: 'Töötasime välja raamistiku otsustamaks uuesti anoteerimise, otsustamise või juhiste uuendamise vahel, lähtudes üksuse- ja annoteerijapõhisest erimeelsuste määrast.',
        DE: 'Wir entwickelten einen Rahmen für die Entscheidung zwischen Neu-Annotation, Adjudikation oder Richtlinien-Update auf Basis der Uneinigkeitsraten pro Item und Annotator.',
      },
      {
        ES: 'Con umbrales de 0.70 y 0.85 de acuerdo, logramos reducir rondas de consenso en un 30% sin degradar la calidad final.',
        EN: 'With agreement thresholds of 0.70 and 0.85, we cut consensus rounds by 30% without degrading final quality.',
        ET: 'Kokkuleppe künnistega 0,70 ja 0,85 vähendasime konsensusevoorude arvu 30% ilma lõplikku kvaliteeti kahjustamata.',
        DE: 'Mit Übereinstimmungsschwellen von 0,70 und 0,85 reduzierten wir Konsensrunden um 30 %, ohne die Endqualität zu senken.',
      },
      {
        ES: 'El principio: cada ronda debe producir un cambio medible en las pautas; si no lo hace, el costo no se justifica.',
        EN: 'The principle: each round must produce a measurable guideline change; otherwise, the cost is not justified.',
        ET: 'Põhimõte: iga voor peab tooma juhistesse mõõdetava muutuse; kui mitte, pole kulu õigustatud.',
        DE: 'Das Prinzip: Jede Runde muss eine messbare Richtlinienänderung erzeugen – sonst ist der Aufwand nicht gerechtfertigt.',
      },
    ],
    author: 'carlos',
    readingTime: 6,
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'rlhf-preference-data-crafting',
    category: 'methodology',
    title: {
      ES: 'Anotación de preferencias para RLHF: cómo evitar datos contaminados',
      EN: 'Preference annotation for RLHF: how to avoid contaminated data',
      ET: 'Eelistuste anoteerimine RLHF-i jaoks: kuidas vältida saastunud andmeid',
      DE: 'Präferenz-Annotation für RLHF: verunreinigte Daten vermeiden',
    },
    date: { ES: '26 jun 2026', EN: 'Jun 26, 2026', ET: '26. juuni 2026', DE: '26. Juni 2026' },
    excerpt: {
      ES: 'Ranking sesgado, anotadores fatigados y guías ambiguas: los tres enemigos silenciosos de tus datos de preferencia.',
      EN: 'Biased ranking, fatigued annotators, and ambiguous guidelines: the three silent enemies of your preference data.',
      ET: 'Kallutatud reastus, väsinud annoteerijad ja mitmetähenduslikud juhised: kolm vaikset vaenlast teie eelistusandmetes.',
      DE: 'Verzerrtes Ranking, ermüdete Annotatoren und mehrdeutige Richtlinien: die drei stillen Feinde Ihrer Präferenzdaten.',
    },
    content: [
      {
        ES: 'Los datos de preferencia son el combustible del alineamiento, pero se contaminan fácilmente: la posición del texto, la longitud de la respuesta y el orden de presentación sesgan los rankings.',
        EN: 'Preference data fuels alignment, but it contaminates easily: text position, response length, and presentation order bias the rankings.',
        ET: 'Eelistusandmed on joondamise kütus, kuid need saastuvad kergesti: teksti asend, vastuse pikkus ja esitamise järjekord kallutavad reastusi.',
        DE: 'Präferenzdaten sind der Treibstoff des Alignment, verunreinigen aber leicht: Textposition, Antwortlänge und Darstellungsreihenfolge verzerren das Ranking.',
      },
      {
        ES: 'Establecimos protocolos de aleatorización, sesiones limitadas a 45 minutos y controles de calidad intercalados para medir la atención del anotador.',
        EN: 'We established randomization protocols, 45-minute session caps, and interleaved quality checks to measure annotator attention.',
        ET: 'Kehtestasime randomiseerimisprotokollid, 45-minutilised seansipiirangud ja vahele segatud kvaliteedikontrollid annoteerija tähelepanu mõõtmiseks.',
        DE: 'Wir etablierten Randomisierungsprotokolle, 45-Minuten-Sitzungslimits und eingestreute Qualitätskontrollen zur Messung der Annotator-Aufmerksamkeit.',
      },
      {
        ES: 'Con estas medidas, la coherencia interna de los rankings subió del 78% al 94% en un programa de 6 meses.',
        EN: 'With these measures, internal ranking consistency rose from 78% to 94% in a 6-month program.',
        ET: 'Nende meetmetega tõusis reastuste sisemine järjepidevus 6-kuulises programmis 78%-lt 94%-le.',
        DE: 'Mit diesen Maßnahmen stieg die interne Ranking-Konsistenz in einem 6-Monats-Programm von 78 % auf 94 %.',
      },
      {
        ES: 'La lección: la calidad del modelo alineado depende tanto de la higiene del proceso de anotación como del prompt engineering.',
        EN: 'The lesson: aligned-model quality depends as much on process hygiene as on prompt engineering.',
        ET: 'Õppetund: joondatud mudeli kvaliteet sõltub protsessi hügieenist sama palju kui promptide disainist.',
        DE: 'Die Lehre: Die Qualität alignierter Modelle hängt ebenso von der Prozesshygiene ab wie vom Prompt Engineering.',
      },
    ],
    author: 'carlos',
    readingTime: 7,
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'eu-ai-act-compliance',
    category: 'industry',
    title: {
      ES: 'EU AI Act: qué significa la compliance para proveedores de datos',
      EN: 'EU AI Act: what compliance means for data providers',
      ET: 'EL AI-määrus: mida tähendab vastavus andmepakkujatele',
      DE: 'EU-KI-Verordnung: was Compliance für Datenanbieter bedeutet',
    },
    date: { ES: '30 jul 2026', EN: 'Jul 30, 2026', ET: '30. juuli 2026', DE: '30. Juli 2026' },
    excerpt: {
      ES: 'Trazabilidad, calidad documentada y sesgos medibles: los nuevos requisitos contractuales del mercado europeo.',
      EN: 'Traceability, documented quality, and measurable bias: the new contractual requirements of the European market.',
      ET: 'Jälgitavus, dokumenteeritud kvaliteet ja mõõdetav eelarvamus: Euroopa turu uued lepingunõuded.',
      DE: 'Nachvollziehbarkeit, dokumentierte Qualität und messbarer Bias: die neuen vertraglichen Anforderungen des europäischen Marktes.',
    },
    content: [
      {
        ES: 'La entrada en vigor de la normativa europea transforma la relación entre proveedores de datos y desarrolladores de IA de alto riesgo.',
        EN: 'The entry into force of European regulation transforms the relationship between data providers and developers of high-risk AI.',
        ET: 'Euroopa regulatsiooni jõustumine muudab andmepakkujate ja kõrge riskiga AI arendajate suhet.',
        DE: 'Das Inkrafttreten der europäischen Regulierung verändert das Verhältnis zwischen Datendienstleistern und Entwicklern von Hochrisiko-KI.',
      },
      {
        ES: 'Los contratos exigen ahora trazabilidad de cada etiqueta, métricas de calidad por lote y evaluaciones de sesgo con documentación auditada.',
        EN: 'Contracts now demand traceability for every label, per-batch quality metrics, and bias assessments with audited documentation.',
        ET: 'Lepingud nõuavad nüüd iga sildi jälgitavust, partii-põhiseid kvaliteedimõõdikuid ja eelarvamuste hindamist auditeeritud dokumentatsiooniga.',
        DE: 'Verträge verlangen nun Nachvollziehbarkeit für jedes Label, Qualitätsmetriken pro Batch und Bias-Bewertungen mit auditierter Dokumentation.',
      },
      {
        ES: 'Adaptamos nuestro proceso para entregar registros de anotación exportables, informes de IAA por dominio y pruebas de diversidad muestral.',
        EN: 'We adapted our process to deliver exportable annotation logs, domain-specific IAA reports, and sample-diversity evidence.',
        ET: 'Kohandasime oma protsessi, et pakkuda eksporditavaid anoteerimislogisid, valdkonnapõhiseid IAA-aruanneid ja valimi mitmekesisuse tõendeid.',
        DE: 'Wir haben unseren Prozess angepasst, um exportierbare Annotationslogs, domänenspezifische IAA-Berichte und Stichprobenvielfalts-Nachweise zu liefern.',
      },
      {
        ES: 'Para los clientes, esto se traduce en menor riesgo regulatorio y mayor velocidad de certificación de sus modelos.',
        EN: 'For clients, this means lower regulatory risk and faster model certification.',
        ET: 'Klientidele tähendab see väiksemat regulatiivset riski ja kiiremat mudeli sertifitseerimist.',
        DE: 'Für Kunden bedeutet das geringeres Regulierungsrisiko und schnellere Modellzertifizierung.',
      },
    ],
    author: 'juan',
    readingTime: 7,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'autonomous-mobility-perception',
    category: 'industry',
    title: {
      ES: 'Movilidad autónoma: el cuello de botella de los datos de percepción',
      EN: 'Autonomous mobility: the perception data bottleneck',
      ET: 'Autonoomne liikuvus: tajumisandmete pudelikael',
      DE: 'Autonome Mobilität: der Datenengpass der Wahrnehmung',
    },
    date: { ES: '11 ago 2026', EN: 'Aug 11, 2026', ET: '11. august 2026', DE: '11. August 2026' },
    excerpt: {
      ES: 'Cada kilómetro autónomo genera terabytes de video que requieren anotación 3D, fusión de sensores y casos límite.',
      EN: 'Every autonomous kilometer generates terabytes of video requiring 3D annotation, sensor fusion, and edge cases.',
      ET: 'Iga autonoomne kilomeeter tekitab terabaite videot, mis nõuavad 3D-anoteerimist, andurite liitmist ja piirjuhtumeid.',
      DE: 'Jeder autonome Kilometer erzeugt Terabytes an Video, die 3D-Annotation, Sensorfusion und Randfälle erfordern.',
    },
    content: [
      {
        ES: 'La percepción autónoma combina cámaras, LiDAR y radar: cada modalidad exige anotación coherente con las otras para una fusión precisa.',
        EN: 'Autonomous perception combines cameras, LiDAR, and radar: each modality requires annotation consistent with the others for accurate fusion.',
        ET: 'Autonoomne tajumine ühendab kaamerad, LiDAR-i ja radari: iga modaalsus nõuab teistega kooskõlas olevat anoteerimist täpseks liitmiseks.',
        DE: 'Autonome Wahrnehmung kombiniert Kameras, LiDAR und Radar: Jede Modalität erfordert zur präzisen Fusion eine zu den anderen konsistente Annotation.',
      },
      {
        ES: 'Nuestros flujos de anotación 3D cubren cajas de envoltura volumétricas, segmentación de carriles y clasificación de objetos en condiciones adversas.',
        EN: 'Our 3D annotation flows cover volumetric bounding boxes, lane segmentation, and object classification in adverse conditions.',
        ET: 'Meie 3D-anoteerimisvood hõlmavad ruumilisi piirdekaste, sõidurea segmentimist ja objektide klassifitseerimist ebasoodsates tingimustes.',
        DE: 'Unsere 3D-Annotationsflüsse decken volumetrische Bounding Boxes, Spursegmentierung und Objektklassifikation unter widrigen Bedingungen ab.',
      },
      {
        ES: 'El reto principal son los casos límite: peatones parcialmente ocluidos, clima extremo y escenas raras que concentran los fallos reales.',
        EN: 'The main challenge is edge cases: partially occluded pedestrians, extreme weather, and rare scenes that concentrate real failures.',
        ET: 'Peamine väljakutse on piirjuhtumid: osaliselt kaetud jalakäijad, äärmuslik ilm ja haruldased stseenid, mis koondavad tegelikke tõrkeid.',
        DE: 'Die größte Herausforderung sind Randfälle: teilweise verdeckte Fußgänger, extremes Wetter und seltene Szenen, die echte Fehler konzentrieren.',
      },
      {
        ES: 'Los fabricantes que presupuestan anotación de casos límite desde el inicio despliegan pilotos más seguros y con menos reentrenamientos.',
        EN: 'Manufacturers that budget edge-case annotation from the start deploy safer pilots with less retraining.',
        ET: 'Tootjad, kes planeerivad piirjuhtumite anoteerimist algusest peale, käivitavad ohutumad piloodid väiksema ümbertreeninguga.',
        DE: 'Hersteller, die Randfall-Annotation von Anfang an einplanen, starten sicherere Piloten mit weniger Nachtraining.',
      },
    ],
    author: 'juan',
    readingTime: 8,
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fintech-ner-extraction',
    category: 'industry',
    title: {
      ES: 'Extracción NER en FinTech: datos para trading, KYC y riesgo',
      EN: 'NER extraction in FinTech: data for trading, KYC, and risk',
      ET: 'NER-i ekstraktsioon FinTechis: andmed kauplemiseks, KYC-ks ja riskideks',
      DE: 'NER-Extraktion im FinTech: Daten für Trading, KYC und Risiko',
    },
    date: { ES: '5 jun 2026', EN: 'Jun 5, 2026', ET: '5. juuni 2026', DE: '5. Juni 2026' },
    excerpt: {
      ES: 'Entidades financieras, montos y plazos: cómo la anotación de texto estructurado impulsa la automatización bancaria.',
      EN: 'Financial entities, amounts, and deadlines: how structured text annotation drives banking automation.',
      ET: 'Finantsüksused, summad ja tähtajad: kuidas struktureeritud teksti anoteerimine käivitab panganduse automatiseerimise.',
      DE: 'Finanzentitäten, Beträge und Fristen: Wie strukturierte Textannotation die Bankautomatisierung vorantreibt.',
    },
    content: [
      {
        ES: 'Los contratos, estados de cuenta y noticias financieras contienen información crítica para modelos NER de alta precisión.',
        EN: 'Contracts, bank statements, and financial news contain critical information for high-precision NER models.',
        ET: 'Lepingud, pangakinnitused ja finantsuudised sisaldavad kriitilist teavet kõrge täpsusega NER-mudelite jaoks.',
        DE: 'Verträge, Kontoauszüge und Finanznachrichten enthalten kritische Informationen für hochpräzise NER-Modelle.',
      },
      {
        ES: 'Anotamos entidades financieras (organizaciones, instrumentos, índices) con guías específicas para siglas, filiales y ambigüedad de mercado.',
        EN: 'We annotate financial entities (organizations, instruments, indices) with guidelines specific to acronyms, subsidiaries, and market ambiguity.',
        ET: 'Anoteerime finantsüksusi (organisatsioonid, instrumendid, indeksid) juhistega, mis arvestavad lühendeid, tütarettevõtteid ja turu mitmetähenduslikkust.',
        DE: 'Wir annotieren Finanzentitäten (Organisationen, Instrumente, Indizes) mit Richtlinien für Akronyme, Tochtergesellschaften und Marktambiguität.',
      },
      {
        ES: 'En despliegues para banca, alcanzamos F1 superiores a 0.93 en extracción de entidades, incluyendo texto bilingüe y ruido de OCR.',
        EN: 'In banking deployments we reached F1 scores above 0.93 for entity extraction, including bilingual text and OCR noise.',
        ET: 'Panganduse kasutuselevõttudes saavutasime üksuste ekstraktsiooni F1-skoorid üle 0,93, sealhulgas kakskeelse teksti ja OCR-müra korral.',
        DE: 'In Bankprojekten erreichten wir F1-Scores über 0,93 bei der Entitätsextraktion – inklusive zweisprachigem Text und OCR-Rauschen.',
      },
      {
        ES: 'La infraestructura resultante alimenta sistemas de alerta temprana, análisis de riesgo y automatización de KYC en tiempo real.',
        EN: 'The resulting infrastructure powers early-warning systems, risk analytics, and real-time KYC automation.',
        ET: 'Tulemuseks olev infrastruktuur toidab varajase hoiatamise süsteeme, riskianalüütikat ja reaalajas KYC-automatiseerimist.',
        DE: 'Die entstehende Infrastruktur versorgt Frühwarnsysteme, Risikoanalysen und Echtzeit-KYC-Automatisierung.',
      },
    ],
    author: 'carlos',
    readingTime: 6,
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'data-centric-market-2026',
    category: 'industry',
    title: {
      ES: 'Mercado data-centric 2026-2030: informe para compradores de datos',
      EN: 'Data-centric market 2026-2030: report for data buyers',
      ET: 'Andmekeskne turg 2026-2030: aruanne andmeostjatele',
      DE: 'Data-centric Markt 2026-2030: Bericht für Datenkäufer',
    },
    date: { ES: '27 ago 2026', EN: 'Aug 27, 2026', ET: '27. august 2026', DE: '27. August 2026' },
    excerpt: {
      ES: 'Tamaño, crecimiento y tendencias de compra: el informe que necesitas antes de elegir proveedor de anotación.',
      EN: 'Size, growth, and purchasing trends: the report you need before choosing an annotation provider.',
      ET: 'Suurus, kasv ja ostutrendid: aruanne, mida vajate enne anoteerimispakkuja valimist.',
      DE: 'Größe, Wachstum und Einkaufstrends: der Bericht, den Sie vor der Auswahl eines Annotationsanbieters brauchen.',
    },
    content: [
      {
        ES: 'El mercado de anotación de datos crece a una tasa anual compuesta superior al 25%, impulsado por agentes de IA y modelos multimodales.',
        EN: 'The data annotation market is growing at a compound annual rate above 25%, driven by AI agents and multimodal models.',
        ET: 'Andmete anoteerimise turg kasvab liitkasvumääraga üle 25% aastas, mida juhivad AI-agendid ja multimodaalsed mudelid.',
        DE: 'Der Markt für Datenannotation wächst mit einer durchschnittlichen jährlichen Rate von über 25 %, getrieben durch KI-Agenten und multimodale Modelle.',
      },
      {
        ES: 'La compra se sofistica: los compradores exigen SLAs de calidad, paneles de métricas en vivo y pruebas de concepto con contratos cortos.',
        EN: 'Purchasing is becoming more sophisticated: buyers demand quality SLAs, live metric dashboards, and short-contract proofs of concept.',
        ET: 'Ostmine muutub keerukamaks: ostjad nõuavad kvaliteedi-SLA-sid, reaalajas mõõdikute paneele ja lühikeste lepingutega kontseptsiooni tõestusi.',
        DE: 'Der Einkauf wird anspruchsvoller: Käufer fordern Qualitäts-SLAs, Live-Metrik-Dashboards und Proofs of Concept mit kurzen Verträgen.',
      },
      {
        ES: 'Predecimos una consolidación en proveedores especializados por dominio, con ventaja para quienes combinan lingüistas, clínicos y expertos técnicos.',
        EN: 'We predict consolidation among domain-specialized providers, favoring those who combine linguists, clinicians, and technical experts.',
        ET: 'Prognoosime konsolideerumist valdkonnaspetsialiseerunud pakkujate seas, soosides neid, kes ühendavad keeleteadlasi, kliinikuid ja tehnilisi eksperte.',
        DE: 'Wir prognostizieren eine Konsolidierung bei domänenspezialisierten Anbietern – mit Vorteil für jene, die Linguisten, Kliniker und Technikexperten vereinen.',
      },
      {
        ES: 'Las decisiones de compra migrarán de precio por etiqueta a costo por calidad de modelo desplegado.',
        EN: 'Purchasing decisions will shift from price per label to cost per deployed model quality.',
        ET: 'Ostuotsused nihkuvad sildi hinnalt kasutusele võetud mudeli kvaliteedi kuluni.',
        DE: 'Kaufentscheidungen verlagern sich vom Preis pro Label zu den Kosten pro Qualität des eingesetzten Modells.',
      },
    ],
    author: 'juan',
    readingTime: 7,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'autonomous-delivery-perception',
    category: 'case-study',
    title: {
      ES: 'Startup de reparto autónomo: percepción 360° en 6 semanas',
      EN: 'Autonomous delivery startup: 360° perception in 6 weeks',
      ET: 'Autonoomse kulleri idufirma: 360° tajumine 6 nädalaga',
      DE: 'Autonomes Delivery-Startup: 360°-Wahrnehmung in 6 Wochen',
    },
    date: { ES: '23 jul 2026', EN: 'Jul 23, 2026', ET: '23. juuli 2026', DE: '23. Juli 2026' },
    excerpt: {
      ES: 'Cámaras, LiDAR y una flota piloto: cómo anotamos 2.4M de frames para evitar colisiones en zonas urbanas.',
      EN: 'Cameras, LiDAR, and a pilot fleet: how we annotated 2.4M frames to prevent collisions in urban areas.',
      ET: 'Kaamerad, LiDAR ja pilootpark: kuidas anoteerisime 2,4 miljonit kaadrit kokkupõrgete vältimiseks linnapiirkondades.',
      DE: 'Kameras, LiDAR und eine Pilotflotte: So annotierten wir 2,4 Mio. Frames, um Kollisionen in Stadtgebieten zu vermeiden.',
    },
    content: [
      {
        ES: 'Una startup europea de reparto autónomo necesitaba datos de percepción etiquetados para desplegar una flota piloto en tres ciudades.',
        EN: 'A European autonomous delivery startup needed labeled perception data to deploy a pilot fleet in three cities.',
        ET: 'Euroopa autonoomse kulleri idufirma vajas märgistatud tajumisandmeid pilootpargi kasutuselevõtuks kolmes linnas.',
        DE: 'Ein europäisches Autonomous-Delivery-Startup benötigte gelabelte Wahrnehmungsdaten für den Einsatz einer Pilotflotte in drei Städten.',
      },
      {
        ES: 'Anotamos 2.4M de frames con cajas 3D, segmentación de obstáculos y fusión temporal cámara-LiDAR, manteniendo un IAA de 0.92.',
        EN: 'We annotated 2.4M frames with 3D boxes, obstacle segmentation, and temporal camera-LiDAR fusion, maintaining an IAA of 0.92.',
        ET: 'Anoteerisime 2,4 miljonit kaadrit 3D-kastide, takistuste segmentimise ja kaamera-LiDAR ajalise liitmisega, säilitades IAA 0,92.',
        DE: 'Wir annotierten 2,4 Mio. Frames mit 3D-Boxen, Hindernis-Segmentierung und zeitlicher Kamera-LiDAR-Fusion bei einer IAA von 0,92.',
      },
      {
        ES: 'La flota piloto completó 12.000 kilómetros sin incidentes críticos, y la tasa de intervención remota cayó un 44%.',
        EN: 'The pilot fleet completed 12,000 kilometers without critical incidents, and remote intervention dropped by 44%.',
        ET: 'Pilootpark läbis 12 000 kilomeetrit ilma kriitiliste juhtumiteta ja kaugsekkumiste määr langes 44%.',
        DE: 'Die Pilotflotte absolvierte 12.000 Kilometer ohne kritische Vorfälle; Ferneingriffe sanken um 44 %.',
      },
      {
        ES: 'El tiempo de anotación por escena se redujo 2.3× con herramientas de auto-etiquetado asistido y revisión humana priorizada.',
        EN: 'Annotation time per scene fell 2.3× with assisted auto-labeling and prioritized human review.',
        ET: 'Stseeni anoteerimisaeg vähenes 2,3 korda assisteeritud automaatse märgistamise ja prioriseeritud inimülevaatega.',
        DE: 'Die Annotationszeit pro Szene fiel um das 2,3-Fache dank assistiertem Auto-Labeling und priorisierter menschlicher Prüfung.',
      },
    ],
    author: 'carlos',
    readingTime: 6,
    imageUrl: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fintech-kyc-documents',
    category: 'case-study',
    title: {
      ES: 'FinTech de pagos: KYC documental para 4 mercados latinoamericanos',
      EN: 'Payments FinTech: document KYC for 4 Latin American markets',
      ET: 'Maksete FinTech: dokumentide KYC 4 Ladina-Ameerika turule',
      DE: 'Payments-FinTech: Dokumenten-KYC für 4 lateinamerikanische Märkte',
    },
    date: { ES: '9 jul 2026', EN: 'Jul 9, 2026', ET: '9. juuli 2026', DE: '9. Juli 2026' },
    excerpt: {
      ES: 'DNI, pasaportes y facturas en 4 formatos: cómo lograr una precisión del 99% en verificación de identidad.',
      EN: 'IDs, passports, and invoices in 4 formats: reaching 99% accuracy in identity verification.',
      ET: 'ID-kaardid, passid ja arved 4 formaadis: 99% täpsuse saavutamine identiteedikontrollis.',
      DE: 'Ausweise, Pässe und Rechnungen in 4 Formaten: 99 % Genauigkeit bei der Identitätsprüfung.',
    },
    content: [
      {
        ES: 'Una FinTech de pagos necesitaba extraer datos de documentos de identidad para onboarding digital en mercados con formatos heterogéneos.',
        EN: 'A payments FinTech needed to extract identity document data for digital onboarding in markets with heterogeneous formats.',
        ET: 'Maksete FinTech vajas identiteedidokumentide andmete ekstraktsiooni digitaalseks sisenemiseks heterogeensete formaatidega turgudel.',
        DE: 'Ein Payments-FinTech musste Identitätsdaten für das digitale Onboarding in Märkten mit heterogenen Formaten extrahieren.',
      },
      {
        ES: 'Anotamos campos críticos (nombre, fecha, documento, dirección) sobre 480K imágenes con rotación, reflejos y baja calidad de captura.',
        EN: 'We annotated critical fields (name, date, document number, address) on 480K images with rotation, glare, and low capture quality.',
        ET: 'Anoteerisime kriitilisi välju (nimi, kuupäev, dokumendi number, aadress) 480 000 pildil, millel oli pöörlemist, peegeldusi ja madalat pildistamiskvaliteeti.',
        DE: 'Wir annotierten kritische Felder (Name, Datum, Ausweisnummer, Adresse) auf 480.000 Bildern mit Drehung, Spiegelungen und geringer Aufnahmequalität.',
      },
      {
        ES: 'Alcanzamos 99.1% de exactitud de campo y redujimos los falsos rechazos en un 31%, acelerando el onboarding a 90 segundos.',
        EN: 'We reached 99.1% field accuracy and cut false rejections by 31%, speeding onboarding to 90 seconds.',
        ET: 'Saavutasime 99,1% väljatäpsuse ja vähendasime valetagasi lükkamisi 31%, kiirendades sisenemise 90 sekundini.',
        DE: 'Wir erreichten 99,1 % Feldgenauigkeit und reduzierten Fehlablehnungen um 31 % – das Onboarding dauert nun 90 Sekunden.',
      },
      {
        ES: 'La clave fue un equipo bilingüe por mercado y guías específicas para cada formato documental.',
        EN: 'The key was a per-market bilingual team and format-specific guidelines.',
        ET: 'Võti oli iga turu kakskeelne meeskond ja vormingupõhised juhised.',
        DE: 'Der Schlüssel war ein pro Markt zweisprachiges Team mit formatspezifischen Richtlinien.',
      },
    ],
    author: 'juan',
    readingTime: 6,
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'multilingual-saas-copilot',
    category: 'case-study',
    title: {
      ES: 'SaaS B2B: datos de soporte multilingüe para un copiloto de éxito',
      EN: 'B2B SaaS: multilingual support data for a successful copilot',
      ET: 'B2B SaaS: mitmekeelsed tugiandmed eduka copiloti jaoks',
      DE: 'B2B-SaaS: mehrsprachige Supportdaten für einen erfolgreichen Copilot',
    },
    date: { ES: '31 jul 2026', EN: 'Jul 31, 2026', ET: '31. juuli 2026', DE: '31. Juli 2026' },
    excerpt: {
      ES: '1.8M de interacciones de soporte en 9 idiomas convertidas en datos RLHF de alta calidad para un asistente conversacional.',
      EN: '1.8M support interactions in 9 languages converted into high-quality RLHF data for a conversational assistant.',
      ET: '1,8 miljonit tugisuhtlust 9 keeles muudetud kvaliteetseks RLHF-andmeks vestlusassistendi jaoks.',
      DE: '1,8 Mio. Support-Interaktionen in 9 Sprachen als hochwertige RLHF-Daten für einen Konversationsassistenten.',
    },
    content: [
      {
        ES: 'Un SaaS B2B quería lanzar un copiloto de soporte en 9 idiomas con respuestas que reflejaran el tono de su marca.',
        EN: 'A B2B SaaS company wanted to launch a support copilot in 9 languages with answers reflecting its brand tone.',
        ET: 'B2B SaaS ettevõte soovis käivitada tugi-copiloti 9 keeles, vastustega, mis peegeldavad kaubamärgi tooni.',
        DE: 'Ein B2B-SaaS-Unternehmen wollte einen Support-Copilot in 9 Sprachen launchen – mit Antworten im Ton der eigenen Marke.',
      },
      {
        ES: 'Anotamos 1.8M de interacciones: clasificación de intención, satisfacción de la resolución y pares de preferencia para RLHF.',
        EN: 'We annotated 1.8M interactions: intent classification, resolution satisfaction, and preference pairs for RLHF.',
        ET: 'Anoteerisime 1,8 miljonit suhtlust: kavatsuste klassifitseerimine, lahenduse rahulolu ja RLHF-i eelistuspaarid.',
        DE: 'Wir annotierten 1,8 Mio. Interaktionen: Intent-Klassifikation, Lösungszufriedenheit und Präferenzpaare für RLHF.',
      },
      {
        ES: 'El copiloto resolvió el 62% de los tickets de primer nivel en el primer trimestre y redujo el tiempo medio de resolución un 28%.',
        EN: 'The copilot resolved 62% of first-level tickets in the first quarter and cut average resolution time by 28%.',
        ET: 'Copilot lahendas esimeses kvartalis 62% esmatasandi piletitest ja lühendas keskmist lahendusaega 28%.',
        DE: 'Der Copilot löste im ersten Quartal 62 % der First-Level-Tickets und senkte die durchschnittliche Lösungszeit um 28 %.',
      },
      {
        ES: 'El programa demostró que los datos de soporte, bien anotados, se convierten en el activo de producto más valioso de un equipo CS.',
        EN: 'The program proved that well-annotated support data becomes the most valuable product asset of a CS team.',
        ET: 'Programm tõestas, et hästi anoteeritud tugiandmed on CS-meeskonna kõige väärtuslikum tootevara.',
        DE: 'Das Programm zeigte: Gut annotierte Supportdaten werden zum wertvollsten Produktasset eines CS-Teams.',
      },
    ],
    author: 'carlos',
    readingTime: 7,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'manufacturing-visual-qa',
    category: 'case-study',
    title: {
      ES: 'Manufactura 4.0: inspección visual de calidad en líneas de producción',
      EN: 'Manufacturing 4.0: visual quality inspection on production lines',
      ET: 'Tootmine 4.0: visuaalne kvaliteedikontroll tootmisliinidel',
      DE: 'Manufacturing 4.0: visuelle Qualitätsprüfung an Produktionslinien',
    },
    date: { ES: '20 ago 2026', EN: 'Aug 20, 2026', ET: '20. august 2026', DE: '20. August 2026' },
    excerpt: {
      ES: 'Defectos mínimos, iluminación inestable y ciclos de 40ms: cómo anotar datos de inspección que resisten la fábrica real.',
      EN: 'Tiny defects, unstable lighting, and 40ms cycles: how to annotate inspection data that survives the real factory.',
      ET: 'Väikesed defektid, ebastabiilne valgustus ja 40ms tsüklid: kuidas anoteerida ülevaatusandmeid, mis peavad vastu päris tehases.',
      DE: 'Winzige Defekte, instabile Beleuchtung und 40-ms-Zyklen: Inspektionsdaten annotieren, die der echten Fabrik standhalten.',
    },
    content: [
      {
        ES: 'Un fabricante de componentes electrónicos quería automatizar la inspección de calidad con visión por computadora.',
        EN: 'An electronic components manufacturer wanted to automate quality inspection with computer vision.',
        ET: 'Elektroonikakomponentide tootja soovis kvaliteedikontrolli arvutinägemisega automatiseerida.',
        DE: 'Ein Hersteller elektronischer Bauteile wollte die Qualitätsprüfung mit Computer Vision automatisieren.',
      },
      {
        ES: 'Anotamos 900K imágenes con defectos de micro-soldadura, rayaduras y variaciones de color, más condiciones de iluminación reales.',
        EN: 'We annotated 900K images with micro-soldering defects, scratches, and color variations, plus real lighting conditions.',
        ET: 'Anoteerisime 900 000 pilti mikrojootmise defektide, kriimustuste ja värvierinevustega ning reaalsete valgustingimustega.',
        DE: 'Wir annotierten 900.000 Bilder mit Mikrolötfehlern, Kratzern und Farbabweichungen sowie realen Lichtverhältnissen.',
      },
      {
        ES: 'El sistema en línea alcanzó una tasa de falsos negativos inferior al 0.8% respetando el ciclo de 40ms por pieza.',
        EN: 'The online system achieved a false-negative rate below 0.8% while respecting the 40ms per-part cycle.',
        ET: 'Liinisüsteem saavutas valenegatiivide määra alla 0,8%, järgides 40ms tsüklit detaili kohta.',
        DE: 'Das Online-System erreichte eine Falsch-negativ-Quote unter 0,8 % bei Einhaltung des 40-ms-Zyklus pro Teil.',
      },
      {
        ES: 'El retorno de inversión se logró en 7 meses al reducir el 70% del trabajo manual de inspección.',
        EN: 'The return on investment came in 7 months by cutting 70% of manual inspection work.',
        ET: 'Investeeringutasuvus saavutati 7 kuuga, vähendades 70% käsitsi tehtavast ülevaatustööst.',
        DE: 'Der ROI wurde in 7 Monaten erreicht, da 70 % der manuellen Prüfarbeit entfiel.',
      },
    ],
    author: 'juan',
    readingTime: 5,
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
  },
];

const CATEGORIES: { key: CategoryKey | 'all'; label: Trans }[] = [
  { key: 'all', label: { ES: 'Todos', EN: 'All', ET: 'Kõik', DE: 'Alle' } },
  { key: 'research', label: { ES: 'Investigación', EN: 'Research', ET: 'Uuringud', DE: 'Forschung' } },
  { key: 'methodology', label: { ES: 'Metodología', EN: 'Methodology', ET: 'Metoodika', DE: 'Methodik' } },
  { key: 'industry', label: { ES: 'Industria', EN: 'Industry', ET: 'Tööstus', DE: 'Industrie' } },
  { key: 'case-study', label: { ES: 'Casos de Estudio', EN: 'Case Studies', ET: 'Juhtumiuuringud', DE: 'Fallstudien' } },
];

const POSTS_PER_PAGE = 6;

const getCategoryLabel = (category: CategoryKey): Trans => {
  switch (category) {
    case 'research':
      return CATEGORIES[1].label;
    case 'methodology':
      return CATEGORIES[2].label;
    case 'industry':
      return CATEGORIES[3].label;
    case 'case-study':
      return CATEGORIES[4].label;
  }
};

interface BlogCardProps {
  post: Post;
  t: (translations: { ES: string; EN: string; ET?: string; DE?: string }) => string;
  onRead: (post: Post) => void;
}

const BlogCard = ({ post, t, onRead }: BlogCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full h-full"
    >
      <article
        onClick={() => onRead(post)}
        className="group bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer h-full relative"
      >
        <div className="w-full aspect-video relative overflow-hidden">
          <ImageWithFallback
            src={post.imageUrl}
            alt={t(post.title)}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-cyan-500/80 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-lg">
            {t(getCategoryLabel(post.category))}
          </div>
        </div>

        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="text-xs text-slate-400 font-mono mb-2">{t(post.date)}</div>
            <h3 className="text-lg font-bold text-white line-clamp-2 group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
              {t(post.title)}
            </h3>
            <p className="text-sm text-slate-300 line-clamp-3 mb-4 font-normal leading-relaxed">
              {t(post.excerpt)}
            </p>
          </div>
          <button
            type="button"
            className="text-cyan-400 font-semibold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all cursor-pointer self-start"
            aria-label={`${t({ ES: 'Leer más: ', EN: 'Read more: ', ET: 'Loe edasi: ', DE: 'Weiterlesen: ' })}${t(post.title)}`}
          >
            {t({ ES: 'Leer más', EN: 'Read more', ET: 'Loe edasi', DE: 'Weiterlesen' })}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </article>
    </motion.div>
  );
};

export const Blog = () => {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = React.useState<CategoryKey | 'all'>('all');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedPost, setSelectedPost] = React.useState<Post | null>(null);
  const gridRef = React.useRef<HTMLDivElement>(null);

  const filteredPosts = activeCategory === 'all'
    ? POSTS
    : POSTS.filter((post) => post.category === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const currentPosts = filteredPosts.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE);

  const scrollToGrid = () => {
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCategoryChange = (category: CategoryKey | 'all') => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setCurrentPage(1);
    scrollToGrid();
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    scrollToGrid();
  };

  React.useEffect(() => {
    if (!selectedPost) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPost(null);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedPost]);

  const selectedAuthor = selectedPost ? AUTHORS[selectedPost.author] : null;

  return (
    <div className="flex flex-col w-full font-sans bg-[#0B1121]">
      {/* 2.7. Blog / Recursos */}
      <section className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-[#0B1121] to-[#1E293B] relative overflow-hidden">

        {/* Dynamic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&fit=crop"
            alt="Abstract AI Background"
            className="w-full h-full object-cover opacity-10 blur-[8px] mix-blend-overlay"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[32px] md:text-[40px] font-semibold text-[#FFFFFF] mb-6 [text-shadow:0_2px_15px_rgba(0,0,0,0.4)]"
            >
              {t({ ES: 'Recursos y Conocimiento', EN: 'Resources & Knowledge', ET: 'Ressursid ja teadmised', DE: 'Ressourcen & Wissen' })}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[16px] md:text-[18px] text-[#CBD5E1] font-normal leading-[1.6]"
            >
              {t({
                ES: 'Insights, metodologías y tendencias sobre la industria de la anotación de datos para IA.',
                EN: 'Insights, methodologies, and trends about the AI data annotation industry.',
                ET: 'Sissevaated, metoodikad ja trendid AI andmete anoteerimise tööstuse kohta.',
                DE: 'Einblicke, Methoden und Trends rund um die KI-Datenannotationsbranche.'
              })}
            </motion.p>
          </div>

          {/* Filtros por categoría */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
            role="group"
            aria-label={t({ ES: 'Filtrar por categoría', EN: 'Filter by category', ET: 'Filtreeri kategooria järgi', DE: 'Nach Kategorie filtern' })}
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category.key;
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => handleCategoryChange(category.key)}
                  aria-pressed={isActive}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-[14px] font-semibold border transition-all duration-300 active:scale-95 ${
                    isActive
                      ? 'bg-[#4A90D9] text-[#FFFFFF] border-[#4A90D9] shadow-[0_0_20px_rgba(74,144,217,0.45)]'
                      : 'bg-slate-900/60 backdrop-blur-xl text-[#CBD5E1] border-white/10 hover:border-white/30 hover:text-[#FFFFFF] hover:bg-slate-800/70'
                  }`}
                >
                  {t(category.label)}
                </button>
              );
            })}
          </motion.div>

          {/* Grid de artículos */}
          <div ref={gridRef} className="scroll-mt-28">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              <AnimatePresence mode="popLayout">
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} t={t} onRead={setSelectedPost} />
                ))}
              </AnimatePresence>
            </div>

            {currentPosts.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-[#94A3B8] text-[16px] py-20"
              >
                {t({ ES: 'No hay artículos en esta categoría todavía.', EN: 'No articles in this category yet.', ET: 'Selles kategoorias pole veel artikleid.', DE: 'Noch keine Artikel in dieser Kategorie.' })}
              </motion.p>
            )}
          </div>

          {/* Paginación real */}
          {totalPages > 1 && (
            <motion.nav
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 flex justify-center"
              aria-label={t({ ES: 'Paginación', EN: 'Pagination', ET: 'Leheküljendus', DE: 'Seitennummerierung' })}
            >
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 rounded-xl border border-white/10 bg-slate-900/50 p-2 backdrop-blur-xl">
              <button
                type="button"
                onClick={() => handlePageChange(safePage - 1)}
                disabled={safePage <= 1}
                className="px-4 h-10 rounded-md bg-slate-900/60 backdrop-blur-xl border border-white/10 text-[#CBD5E1] font-semibold text-[14px] hover:bg-slate-800/70 hover:text-[#FFFFFF] hover:border-white/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-slate-900/60"
              >
                ← {t({ ES: 'Anterior', EN: 'Previous', ET: 'Eelmine', DE: 'Zurück' })}
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    aria-current={page === safePage ? 'page' : undefined}
                    className={`w-10 h-10 rounded-md font-semibold transition-all active:scale-95 ${
                      page === safePage
                        ? 'bg-[#4A90D9] text-[#FFFFFF] shadow-[0_0_15px_rgba(74,144,217,0.4)]'
                        : 'bg-slate-900/60 backdrop-blur-xl border border-white/10 text-[#CBD5E1] hover:bg-slate-800/70 hover:text-[#FFFFFF] hover:border-white/30'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => handlePageChange(safePage + 1)}
                disabled={safePage >= totalPages}
                className="px-4 h-10 rounded-md bg-slate-900/60 backdrop-blur-xl border border-white/10 text-[#CBD5E1] font-semibold text-[14px] hover:bg-slate-800/70 hover:text-[#FFFFFF] hover:border-white/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-slate-900/60"
              >
                {t({ ES: 'Siguiente', EN: 'Next', ET: 'Järgmine', DE: 'Weiter' })} →
              </button>
              </div>
            </motion.nav>
          )}
        </div>
      </section>

      {/* Modal de lectura (Lightbox Liquid Glass) */}
      <AnimatePresence>
        {selectedPost && selectedAuthor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={t(selectedPost.title)}
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedPost(null)}
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.25)]"
            >
              <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden">
                <ImageWithFallback
                  src={selectedPost.imageUrl}
                  alt={t(selectedPost.title)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-[#4A90D9] text-[#FFFFFF] text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                  {t(getCategoryLabel(selectedPost.category))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  aria-label={t({ ES: 'Cerrar', EN: 'Close', ET: 'Sulge', DE: 'Schließen' })}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/70 backdrop-blur-xl border border-white/20 text-[#FFFFFF] text-[18px] font-light flex items-center justify-center hover:bg-[#4A90D9] hover:border-[#4A90D9] hover:shadow-[0_0_15px_rgba(74,144,217,0.5)] transition-all active:scale-90"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-5 text-[14px] text-[#94A3B8]">
                  <span className="inline-flex items-center gap-2.5">
                    <img
                      src={selectedAuthor.avatar}
                      alt={selectedAuthor.name}
                      className="w-8 h-8 rounded-full object-cover border border-white/20"
                      loading="lazy"
                    />
                    <span className="flex flex-col leading-tight">
                      <span className="text-[#FFFFFF] text-[14px] font-semibold">{selectedAuthor.name}</span>
                      <span className="text-[12px] text-[#94A3B8]">{t(selectedAuthor.role)}</span>
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#4A90D9]" />
                    {t(selectedPost.date)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#2ECC71]" />
                    {t(readTimeLabel(selectedPost.readingTime))}
                  </span>
                </div>

                <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#FFFFFF] mb-6 leading-snug [text-shadow:0_2px_15px_rgba(0,0,0,0.4)]">
                  {t(selectedPost.title)}
                </h3>

                <div className="space-y-5">
                  {selectedPost.content.map((paragraph, idx) => (
                    <p key={idx} className="text-[16px] md:text-[17px] text-[#CBD5E1] font-normal leading-[1.75]">
                      {t(paragraph)}
                    </p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-[14px] text-[#94A3B8]">
                    {t({ ES: '¿Te interesa este tema? Hablemos de tu proyecto.', EN: 'Interested in this topic? Let us talk about your project.', ET: 'Huvitatud sellest teemast? Räägime teie projektist.', DE: 'Interessiert an diesem Thema? Sprechen wir über Ihr Projekt.' })}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedPost(null)}
                    className="self-start sm:self-auto px-5 py-2.5 rounded-full bg-[#4A90D9] text-[#FFFFFF] text-[14px] font-semibold hover:bg-[#2ECC71] hover:shadow-[0_0_20px_rgba(46,204,113,0.4)] transition-all active:scale-95"
                  >
                    {t({ ES: 'Cerrar', EN: 'Close', ET: 'Sulge', DE: 'Schließen' })}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
