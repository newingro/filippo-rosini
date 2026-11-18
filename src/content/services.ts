export type ServiceIconName = "people" | "ledger" | "network" | "document" | "paragraph" | "growth" | "key";

export type Service = {
  slug: string;
  number: string;
  title: string;
  icon: ServiceIconName;
  short: string;
  intro: string;
  body: string[];
  scope: string[];
  audience: string[];
  faq: { q: string; a: string }[];
  /** Avvertenza sui limiti professionali, mostrata in evidenza nella pagina del servizio. */
  notice?: string;
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "consulenza-del-lavoro",
    number: "01",
    title: "Consulenza del lavoro",
    icon: "people",
    short:
      "Gestione dei rapporti di lavoro subordinato, contratti, elaborazione paghe e contributi, adempimenti e assistenza per verifiche, ispezioni, vertenze e contenzioso previdenziale.",
    intro:
      "La gestione del personale è uno degli ambiti più delicati per un'impresa: richiede precisione negli adempimenti, conoscenza dei contratti collettivi e attenzione costante all'evoluzione normativa. Lo studio affianca il datore di lavoro in ogni fase del rapporto, dall'assunzione alla cessazione.",
    body: [
      "Studio Rosini segue l'intero ciclo di gestione dei rapporti di lavoro subordinato: dalla scelta della tipologia contrattuale più adeguata alla redazione delle lettere di assunzione, dall'elaborazione mensile dei cedolini paga al calcolo e al versamento dei contributi previdenziali e assicurativi.",
      "Accanto all'attività ordinaria, lo studio assiste le imprese in occasione di verifiche e ispezioni degli organi di vigilanza, nelle vertenze di lavoro e nel contenzioso previdenziale, nell'ambito delle competenze proprie del Consulente del Lavoro.",
      "L'obiettivo è offrire al datore di lavoro un riferimento unico e affidabile, capace di anticipare le scadenze e di spiegare con chiarezza gli effetti di ogni scelta sul costo e sull'organizzazione del personale.",
    ],
    scope: [
      "Instaurazione, trasformazione e cessazione dei rapporti di lavoro",
      "Scelta della tipologia contrattuale e applicazione dei CCNL",
      "Elaborazione dei cedolini paga e degli adempimenti mensili e annuali",
      "Calcolo e versamento di contributi previdenziali e assicurativi",
      "Comunicazioni obbligatorie a INPS, INAIL e Centri per l'impiego",
      "Certificazione Unica e adempimenti del sostituto d'imposta",
      "Assistenza in occasione di verifiche e ispezioni",
      "Vertenze di lavoro e contenzioso previdenziale",
    ],
    audience: [
      "Imprese con personale dipendente, di ogni settore e dimensione",
      "Attività artigiane, commerciali e di servizi",
      "Professionisti e studi con collaboratori e dipendenti",
      "Nuove imprese che si preparano alla prima assunzione",
    ],
    faq: [
      {
        q: "Quando conviene rivolgersi a un consulente del lavoro?",
        a: "Idealmente prima della prima assunzione: la scelta del contratto, dell'inquadramento e del CCNL applicabile incide sul costo del personale e sugli obblighi dell'impresa per tutta la durata del rapporto. Lo studio può comunque subentrare anche nella gestione di rapporti già in essere.",
      },
      {
        q: "Lo studio può subentrare a un altro consulente nella gestione delle paghe?",
        a: "Sì. Il passaggio richiede la raccolta della documentazione relativa ai dipendenti e ai periodi precedenti: lo studio concorda con il cliente tempi e modalità per garantire la continuità degli adempimenti.",
      },
      {
        q: "Cosa succede in caso di ispezione?",
        a: "Lo studio assiste l'impresa nella preparazione della documentazione richiesta, durante gli accessi degli organi di vigilanza e nelle fasi successive, nei limiti delle competenze professionali del Consulente del Lavoro.",
      },
    ],
    seoTitle: "Consulenza del lavoro e paghe a Pistoia e Prato",
    seoDescription:
      "Gestione dei rapporti di lavoro, elaborazione paghe e contributi, assistenza in ispezioni e vertenze. Studio Rosini, consulenza del lavoro a Pistoia, Prato e Osmannoro.",
  },
  {
    slug: "consulenza-fiscale",
    number: "02",
    title: "Consulenza fiscale",
    icon: "ledger",
    short:
      "Tenuta della contabilità ordinaria e semplificata, assistenza ai contribuenti in regime forfettario, dichiarazioni fiscali, gestione degli adempimenti e predisposizione dei bilanci.",
    intro:
      "Una gestione fiscale ordinata è la base per prendere decisioni consapevoli. Lo studio segue la contabilità e gli adempimenti dichiarativi di imprese, professionisti e privati, con un'attenzione costante alle scadenze e all'evoluzione della normativa.",
    body: [
      "Lo studio cura la tenuta della contabilità in regime ordinario e semplificato e assiste i contribuenti in regime forfettario, verificando nel tempo la permanenza dei requisiti e l'adeguatezza del regime scelto rispetto all'andamento dell'attività.",
      "Si occupa della predisposizione e della trasmissione delle dichiarazioni fiscali, della liquidazione delle imposte, degli adempimenti IVA e della redazione dei bilanci, mantenendo il cliente informato sulle scadenze e sugli aspetti che richiedono una sua decisione.",
    ],
    scope: [
      "Tenuta della contabilità ordinaria e semplificata",
      "Assistenza ai contribuenti in regime forfettario",
      "Dichiarazioni dei redditi, IVA e IRAP",
      "Liquidazione e versamento delle imposte",
      "Scadenzario fiscale e adempimenti periodici",
      "Predisposizione dei bilanci d'esercizio",
      "Dichiarazioni dei redditi delle persone fisiche",
    ],
    audience: [
      "Ditte individuali e società",
      "Liberi professionisti",
      "Contribuenti in regime forfettario",
      "Privati per gli adempimenti dichiarativi",
    ],
    faq: [
      {
        q: "Il regime forfettario è adatto alla mia attività?",
        a: "Dipende da diversi fattori: requisiti di accesso, tipo di attività, livello dei ricavi, costi effettivamente sostenuti e prospettive di crescita. Lo studio valuta la situazione specifica prima di indicare il regime più adeguato, senza soluzioni standard.",
      },
      {
        q: "Come avviene lo scambio dei documenti contabili?",
        a: "Le modalità vengono concordate con ciascun cliente in base alla dimensione e all'organizzazione dell'attività. In fase di primo contatto non è necessario inviare documenti: verranno richiesti solo quelli utili, attraverso canali adeguati alla loro riservatezza.",
      },
      {
        q: "Lo studio segue anche i privati?",
        a: "Sì, lo studio assiste anche le persone fisiche negli adempimenti dichiarativi. Per informazioni è possibile contattare la sede più vicina.",
      },
    ],
    seoTitle: "Consulenza fiscale, contabilità e dichiarazioni a Pistoia e Prato",
    seoDescription:
      "Contabilità ordinaria e semplificata, regime forfettario, dichiarazioni fiscali e bilanci. Consulenza fiscale di Studio Rosini per imprese, professionisti e privati.",
  },
  {
    slug: "consulenza-societaria",
    number: "03",
    title: "Consulenza societaria",
    icon: "network",
    short:
      "Assistenza nella costituzione e nella gestione di società di persone e di capitali, supporto alle deliberazioni societarie, cessioni di quote e operazioni straordinarie.",
    intro:
      "Le scelte sulla forma giuridica e sull'organizzazione di un'impresa hanno effetti duraturi. Lo studio assiste soci e amministratori nella costituzione, nella gestione e nelle principali operazioni che riguardano la vita della società.",
    body: [
      "Dalla valutazione della forma societaria più adatta al progetto imprenditoriale alla predisposizione della documentazione necessaria per la costituzione, lo studio affianca i soci nelle fasi iniziali, coordinandosi con il notaio quando l'atto lo richiede.",
      "Nella gestione ordinaria supporta la società negli adempimenti presso il Registro delle Imprese, nella predisposizione di verbali e deliberazioni, nelle cessioni di quote e nelle operazioni straordinarie, con un'attenzione costante agli aspetti fiscali collegati.",
    ],
    scope: [
      "Scelta della forma giuridica tra società di persone e di capitali",
      "Costituzione di società e adempimenti iniziali",
      "Assemblee, verbali e deliberazioni societarie",
      "Adempimenti presso il Registro delle Imprese",
      "Cessioni di quote e variazioni della compagine sociale",
      "Operazioni straordinarie: trasformazioni, conferimenti, fusioni e scissioni",
      "Scioglimento e liquidazione",
    ],
    audience: [
      "Soci e amministratori di società di persone e di capitali",
      "Imprenditori individuali che valutano il passaggio a una società",
      "Nuove iniziative imprenditoriali con più soci",
    ],
    faq: [
      {
        q: "Meglio una società di persone o una società di capitali?",
        a: "Non esiste una risposta valida per tutti: incidono la responsabilità patrimoniale dei soci, il carico fiscale, i costi di gestione, il numero dei soci e le prospettive di sviluppo. Lo studio analizza questi elementi insieme ai soci prima della costituzione.",
      },
      {
        q: "Lo studio si occupa anche degli atti notarili?",
        a: "Gli atti che richiedono la forma pubblica sono di competenza del notaio. Lo studio prepara la documentazione, segue gli aspetti amministrativi e fiscali e si coordina con il professionista incaricato.",
      },
      {
        q: "Come si gestisce una cessione di quote?",
        a: "La cessione di quote richiede una valutazione degli aspetti civilistici e fiscali e degli eventuali accordi tra soci. Lo studio assiste le parti nella fase preparatoria e negli adempimenti successivi, coordinandosi con i professionisti coinvolti.",
      },
    ],
    seoTitle: "Consulenza societaria: costituzione e gestione di società",
    seoDescription:
      "Costituzione di società di persone e di capitali, deliberazioni, cessioni di quote e operazioni straordinarie. Consulenza societaria di Studio Rosini in Toscana.",
  },
  {
    slug: "consulenza-tributaria",
    number: "04",
    title: "Consulenza tributaria",
    icon: "document",
    short:
      "Assistenza in materia di verifiche fiscali, accertamenti e controversie tributarie, con gestione delle pratiche nell'ambito delle competenze professionali consentite.",
    intro:
      "Un controllo fiscale o un avviso di accertamento richiedono un'analisi attenta e tempestiva. Lo studio assiste il contribuente nel rapporto con l'Amministrazione finanziaria, nell'ambito delle competenze professionali consentite.",
    body: [
      "Lo studio esamina la documentazione ricevuta, ricostruisce la posizione del contribuente e lo affianca nelle diverse fasi del rapporto con l'Amministrazione finanziaria: dalle verifiche fiscali al contraddittorio, fino alla valutazione degli strumenti deflativi del contenzioso.",
      "Quando la controversia prosegue in sede giudiziale, l'assistenza viene prestata nei limiti dell'abilitazione prevista dalla legge per la difesa tecnica oppure, ove necessario, in coordinamento con professionisti abilitati.",
    ],
    scope: [
      "Analisi di avvisi, comunicazioni e cartelle",
      "Assistenza durante verifiche e controlli fiscali",
      "Contraddittorio con l'Amministrazione finanziaria",
      "Valutazione degli istituti deflativi del contenzioso",
      "Controversie tributarie, nei limiti delle competenze consentite",
      "Rateizzazioni e regolarizzazioni",
    ],
    audience: [
      "Imprese e professionisti sottoposti a verifiche o controlli",
      "Contribuenti che hanno ricevuto avvisi o comunicazioni",
      "Privati con posizioni fiscali da regolarizzare",
    ],
    faq: [
      {
        q: "Ho ricevuto una comunicazione dall'Agenzia delle Entrate: cosa devo fare?",
        a: "È importante non lasciar trascorrere i termini indicati nell'atto. Contatta lo studio il prima possibile: nel primo contatto è sufficiente indicare la natura della comunicazione ricevuta, senza allegare documenti.",
      },
      {
        q: "Lo studio può assistermi davanti alla Corte di giustizia tributaria?",
        a: "La difesa tecnica nel processo tributario è riservata alle categorie professionali individuate dalla legge e, per alcune di esse, è limitata a specifiche materie. Lo studio valuta ogni singolo caso e, quando necessario, coordina l'assistenza con professionisti abilitati.",
      },
      {
        q: "È possibile rateizzare un debito fiscale?",
        a: "In molti casi la normativa prevede forme di rateizzazione, con condizioni e limiti che variano in base al tipo di debito e alla fase in cui si trova. Lo studio verifica la situazione specifica e le soluzioni percorribili.",
      },
    ],
    seoTitle: "Consulenza tributaria: verifiche, accertamenti e controversie",
    seoDescription:
      "Assistenza in verifiche fiscali, accertamenti e controversie tributarie nei limiti delle competenze consentite. Studio Rosini, Pistoia, Prato e Osmannoro.",
  },
  {
    slug: "consulenza-legale-integrata",
    number: "05",
    title: "Consulenza legale integrata",
    icon: "paragraph",
    short:
      "Accesso ad assistenza in materia civile, commerciale e penale attraverso collaborazioni con professionisti legali qualificati, che svolgono le prestazioni riservate agli avvocati.",
    intro:
      "Le esigenze di un'impresa toccano spesso anche aspetti legali. Attraverso collaborazioni con professionisti legali qualificati, lo studio consente al cliente di accedere a un'assistenza coordinata in materia civile, commerciale e penale.",
    body: [
      "Quando una questione richiede competenze legali, Studio Rosini mette il cliente in contatto con avvocati di fiducia e coordina il loro intervento con gli aspetti del lavoro, fiscali e societari già seguiti dallo studio, evitando passaggi frammentati e duplicazioni.",
      "Le prestazioni riservate agli avvocati, a partire dall'assistenza e dalla rappresentanza in giudizio, sono svolte esclusivamente dai professionisti abilitati, che ne assumono la piena responsabilità professionale.",
    ],
    scope: [
      "Questioni civili e commerciali legate all'attività d'impresa",
      "Contrattualistica e recupero dei crediti, con il supporto di avvocati",
      "Fase contenziosa delle controversie di lavoro",
      "Questioni di rilevanza penale connesse all'attività d'impresa",
      "Coordinamento tra aspetti legali, fiscali e del lavoro",
    ],
    audience: [
      "Imprese e professionisti già assistiti dallo studio",
      "Clienti che necessitano di un'assistenza coordinata tra più competenze",
    ],
    faq: [
      {
        q: "Chi svolge l'attività legale?",
        a: "L'attività legale è svolta da avvocati abilitati con cui lo studio collabora. Studio Rosini si occupa del coordinamento e degli aspetti di propria competenza professionale.",
      },
      {
        q: "Perché passare dallo studio invece di rivolgersi direttamente a un avvocato?",
        a: "Il cliente è sempre libero di scegliere il proprio legale. Il vantaggio di un percorso coordinato è che l'avvocato può contare su informazioni già organizzate sugli aspetti del lavoro, fiscali e societari, con meno passaggi per il cliente.",
      },
    ],
    notice:
      "Le prestazioni riservate agli avvocati sono svolte esclusivamente da professionisti abilitati all'esercizio della professione forense.",
    seoTitle: "Consulenza legale integrata per imprese",
    seoDescription:
      "Assistenza coordinata in materia civile, commerciale e penale tramite avvocati abilitati con cui Studio Rosini collabora. Un unico riferimento per l'impresa.",
  },
  {
    slug: "pratiche-di-finanziamento",
    number: "06",
    title: "Pratiche di finanziamento",
    icon: "growth",
    short:
      "Analisi delle esigenze finanziarie e supporto nell'individuazione di soluzioni di credito, finanziamenti e leasing tramite soggetti autorizzati e partner qualificati.",
    intro:
      "Ogni progetto di sviluppo richiede una valutazione attenta delle risorse necessarie. Lo studio aiuta l'impresa ad analizzare le proprie esigenze finanziarie e a predisporre la documentazione richiesta, nei limiti delle attività consentite.",
    body: [
      "Lo studio supporta il cliente nell'analisi del fabbisogno finanziario, nella lettura dei dati economici dell'impresa e nella preparazione della documentazione contabile e fiscale generalmente richiesta da banche, società di leasing e altri soggetti finanziatori.",
      "L'individuazione delle soluzioni di credito, finanziamento e leasing avviene tramite soggetti autorizzati e partner qualificati. Lo studio non svolge attività di intermediazione o mediazione creditizia, riservate per legge ai soggetti iscritti negli appositi elenchi, e la concessione di ogni finanziamento resta subordinata alle valutazioni dell'ente erogatore.",
    ],
    scope: [
      "Analisi delle esigenze finanziarie dell'impresa",
      "Predisposizione della documentazione contabile e fiscale",
      "Lettura di bilanci e situazioni economiche",
      "Valutazione di credito, finanziamenti e leasing con soggetti autorizzati",
      "Orientamento sugli strumenti agevolativi disponibili",
    ],
    audience: [
      "Imprese che pianificano investimenti",
      "Nuove attività in fase di avvio",
      "Professionisti che valutano l'acquisto di beni strumentali",
    ],
    faq: [
      {
        q: "Lo studio garantisce l'ottenimento del finanziamento?",
        a: "No. La concessione di un finanziamento dipende esclusivamente dalle valutazioni del soggetto erogatore. Lo studio aiuta a rappresentare in modo ordinato e completo la situazione dell'impresa.",
      },
      {
        q: "Quali documenti vengono richiesti di solito?",
        a: "In genere bilanci o dichiarazioni dei redditi, situazioni contabili aggiornate e informazioni sul progetto da finanziare. L'elenco preciso varia in base al soggetto finanziatore e allo strumento scelto.",
      },
    ],
    notice:
      "Le soluzioni di credito, finanziamento e leasing sono erogate da soggetti autorizzati. Lo studio non svolge attività di intermediazione o mediazione creditizia.",
    seoTitle: "Pratiche di finanziamento e supporto al credito d'impresa",
    seoDescription:
      "Analisi del fabbisogno finanziario e documentazione per credito, finanziamenti e leasing tramite soggetti autorizzati. Studio Rosini, Pistoia e Prato.",
  },
  {
    slug: "avvio-impresa-contabilita-bilanci",
    number: "07",
    title: "Avvio d'impresa, contabilità e bilanci",
    icon: "key",
    short:
      "Assistenza per l'apertura di attività, adempimenti amministrativi e fiscali, pratiche SUAP, contabilità, bilanci, documentazione contrattuale e pratiche di successione.",
    intro:
      "Avviare un'attività significa affrontare scelte e adempimenti che condizionano il futuro dell'impresa. Lo studio accompagna l'imprenditore dalla prima idea all'operatività, e poi nella gestione amministrativa di ogni giorno.",
    body: [
      "In fase di avvio lo studio aiuta a valutare la forma giuridica e il regime fiscale più adatti, cura l'apertura della partita IVA, le iscrizioni presso gli enti competenti e le pratiche presso lo Sportello Unico per le Attività Produttive (SUAP).",
      "Una volta avviata l'attività, prosegue con la tenuta della contabilità, la redazione dei bilanci e il supporto nella documentazione contrattuale. Lo studio assiste inoltre i privati nelle pratiche di successione, curando gli adempimenti dichiarativi e i rapporti con gli uffici competenti.",
    ],
    scope: [
      "Valutazione preliminare del progetto imprenditoriale",
      "Apertura della partita IVA e iscrizioni a Registro delle Imprese, INPS e INAIL",
      "Pratiche SUAP e adempimenti amministrativi",
      "Tenuta della contabilità e redazione dei bilanci",
      "Supporto nella documentazione contrattuale",
      "Dichiarazioni e pratiche di successione",
    ],
    audience: [
      "Aspiranti imprenditori e nuove attività",
      "Professionisti che aprono la partita IVA",
      "Imprese che cercano un supporto amministrativo continuativo",
      "Eredi alle prese con una pratica di successione",
    ],
    faq: [
      {
        q: "Quali sono i primi passi per aprire un'attività?",
        a: "Il primo passo è un colloquio per comprendere il progetto: tipo di attività, luogo di esercizio, eventuali soci, previsioni di ricavi e costi. Da qui si definiscono forma giuridica, regime fiscale ed elenco degli adempimenti necessari.",
      },
      {
        q: "Quanto tempo serve per avviare un'attività?",
        a: "Dipende dal tipo di attività e dalle autorizzazioni richieste: alcune pratiche si concludono in pochi giorni, altre richiedono verifiche preliminari o titoli abilitativi specifici. Lo studio indica tempi realistici dopo aver esaminato il caso concreto.",
      },
      {
        q: "Lo studio si occupa delle successioni?",
        a: "Sì, lo studio assiste gli eredi nella predisposizione e nella trasmissione della dichiarazione di successione e negli adempimenti collegati.",
      },
    ],
    seoTitle: "Avvio d'impresa, contabilità e bilanci",
    seoDescription:
      "Apertura della partita IVA, pratiche SUAP, contabilità, bilanci e successioni. Studio Rosini accompagna nuove attività e imprese a Pistoia, Prato e Osmannoro.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
