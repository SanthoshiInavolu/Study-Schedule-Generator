const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const topicsByKeyword = {
    os: [
        {
            topic: 'Processes & Threads',
            tip: 'Focus on process states, PCB structure, and context switching. Draw the state diagram by hand.',
            study: [
                'Read about Process Control Block (PCB) and what fields it contains',
                'Understand the 5 process states: New, Ready, Running, Waiting, Terminated',
                'Study the difference between process and thread',
                'Learn context switching — what gets saved and restored',
                'Understand user-level vs kernel-level threads',
            ],
            problems: [
                'Draw a process state diagram from memory',
                'List all fields in a PCB and explain each',
                'What is the difference between concurrency and parallelism?',
                'Given 3 threads sharing a variable, what problems can occur?',
                'Explain why context switching is expensive',
            ],
        },
        {
            topic: 'CPU Scheduling',
            tip: 'Practice FCFS, SJF, Round Robin with numeric examples. Calculate waiting time & turnaround time.',
            study: [
                'Understand scheduling criteria — CPU utilization, throughput, waiting time, turnaround time',
                'Study FCFS, SJF (preemptive & non-preemptive), Priority, Round Robin algorithms',
                'Learn how to draw Gantt charts for each algorithm',
                'Understand starvation and aging in priority scheduling',
                'Study multilevel queue and multilevel feedback queue',
            ],
            problems: [
                'Given processes P1(0,8), P2(1,4), P3(2,9), P4(3,5) — solve FCFS, SJF, RR(q=2)',
                'Calculate average waiting time and turnaround time for each algorithm above',
                'Which algorithm is best for interactive systems and why?',
                'What is the convoy effect in FCFS? Give an example.',
                'Design a Gantt chart for Round Robin with quantum = 3',
            ],
        },
        {
            topic: 'Memory Management',
            tip: 'Understand paging vs segmentation. Solve page replacement problems — LRU, FIFO, Optimal.',
            study: [
                'Understand fixed vs dynamic partitioning and their fragmentation issues',
                'Study paging — page table, logical vs physical address, page size',
                'Learn segmentation and how it differs from paging',
                'Study virtual memory — demand paging and page fault handling',
                'Understand page replacement algorithms — FIFO, LRU, Optimal, Clock',
            ],
            problems: [
                'Given logical address space 32-bit and page size 4KB, how many page table entries?',
                'Reference string: 7,0,1,2,0,3,0,4,2,3,0,3,2 — solve FIFO and LRU with 3 frames',
                'Calculate page fault rate for both and compare',
                'What is Belady\'s anomaly? Which algorithm suffers from it?',
                'Explain thrashing and how the working set model prevents it',
            ],
        },
        {
            topic: 'Deadlocks',
            tip: 'Learn Banker\'s Algorithm step by step. Practice finding safe sequences.',
            study: [
                'Understand the four necessary conditions for deadlock',
                'Study resource allocation graphs and cycle detection',
                'Learn deadlock prevention strategies for each condition',
                'Study Banker\'s Algorithm — safety algorithm and resource request algorithm',
                'Understand deadlock detection and recovery methods',
            ],
            problems: [
                'Given Allocation, Max, Available matrices — find the need matrix',
                'Apply Banker\'s Algorithm to find a safe sequence',
                'If P1 requests (1,0,2), can it be granted? Show full steps',
                'Draw a resource allocation graph with a deadlock cycle',
                'Which of the 4 deadlock conditions is easiest to prevent in practice?',
            ],
        },
        {
            topic: 'File Systems',
            tip: 'Revise inode structure, directory implementation, and file allocation methods.',
            study: [
                'Understand file attributes, operations, and types',
                'Study file allocation methods — contiguous, linked, indexed',
                'Learn inode structure and what fields it contains',
                'Understand directory structure — single-level, two-level, tree, acyclic graph',
                'Study free space management — bit vector, linked list, grouping',
            ],
            problems: [
                'Compare contiguous vs linked vs indexed allocation with pros/cons',
                'Given an inode, trace how a file at path /home/user/doc.txt is accessed',
                'What is the maximum file size with single, double, triple indirect blocks?',
                'How does the FAT file system implement linked allocation?',
                'Design a directory structure for a multi-user system',
            ],
        },
        {
            topic: 'Past Papers',
            tip: 'Solve last 5 years of questions. Focus on numerical problems.',
            study: [
                'Collect past 5 years of university exam papers for OS',
                'Categorize questions by topic — scheduling, memory, deadlock, file systems',
                'Identify which topics appear every year — those are highest priority',
                'Time yourself: 1.5 minutes per mark as exam simulation',
                'After each paper, list all topics where you lost marks',
            ],
            problems: [
                'Solve one full past paper under exam conditions today',
                'Pick 3 questions you got wrong and reattempt without notes',
                'Write a one-page cheat sheet of formulas and algorithms',
                'Explain the entire OS memory management flow to yourself out loud',
                'Predict 5 questions likely to appear this year based on patterns',
            ],
        },
    ],
    dbms: [
        {
            topic: 'ER Diagrams',
            tip: 'Practice converting real-world scenarios to ER diagrams. Focus on cardinality.',
            study: [
                'Understand entities, attributes (simple, composite, derived, multivalued), and relationships',
                'Learn cardinality ratios — 1:1, 1:N, M:N and participation constraints',
                'Study weak entities and identifying relationships',
                'Understand extended ER features — specialization, generalization, aggregation',
                'Practice converting ER diagrams to relational schema',
            ],
            problems: [
                'Draw ER diagram for a Hospital Management System',
                'Draw ER diagram for an Online Shopping Platform',
                'Convert the Hospital ER diagram to relational tables',
                'Identify all weak entities in a University database scenario',
                'Redesign an ER diagram with a M:N relationship using an associative entity',
            ],
        },
        {
            topic: 'Normalization',
            tip: 'Drill 1NF → 2NF → 3NF → BCNF with examples. Know functional dependencies.',
            study: [
                'Understand functional dependencies, partial and transitive',
                'Learn 1NF — eliminate repeating groups and ensure atomic values',
                'Study 2NF — remove partial dependencies (only for composite keys)',
                'Learn 3NF — remove transitive dependencies',
                'Understand BCNF and how it differs from 3NF',
            ],
            problems: [
                'Given relation R(A,B,C,D,E) with FDs, find the candidate key',
                'Decompose R into 2NF, then 3NF step by step',
                'Is the decomposed relation in BCNF? If not, decompose further',
                'Give an example where 3NF holds but BCNF does not',
                'Check if a given decomposition is lossless join and dependency preserving',
            ],
        },
        {
            topic: 'SQL Queries',
            tip: 'Practice JOIN types, subqueries, GROUP BY, HAVING. Write 10 queries from scratch.',
            study: [
                'Revise SELECT, WHERE, ORDER BY, GROUP BY, HAVING syntax',
                'Study all JOIN types — INNER, LEFT, RIGHT, FULL OUTER, SELF, CROSS',
                'Learn subqueries — correlated vs non-correlated, EXISTS, IN, ANY, ALL',
                'Understand aggregate functions — COUNT, SUM, AVG, MIN, MAX',
                'Study views, stored procedures, triggers, and indexes',
            ],
            problems: [
                'Find the second highest salary from Employee table without using LIMIT',
                'List departments where average salary > company average salary',
                'Find employees who earn more than their manager',
                'Write a query to find duplicate records in a table',
                'Display each department with total employees and total salary using GROUP BY',
            ],
        },
        {
            topic: 'Transactions & ACID',
            tip: 'Understand isolation levels and concurrency problems.',
            study: [
                'Understand ACID properties with real examples for each',
                'Study transaction states — active, partially committed, committed, failed, aborted',
                'Learn concurrency problems — dirty read, unrepeatable read, phantom read, lost update',
                'Study isolation levels — Read Uncommitted, Read Committed, Repeatable Read, Serializable',
                'Understand conflict serializability and precedence graphs',
            ],
            problems: [
                'Give a real-world example for each ACID property',
                'Draw a precedence graph and determine if a schedule is conflict serializable',
                'Which isolation level prevents phantom reads? Explain why.',
                'Show a scenario where lost update occurs and how locking prevents it',
                'Compare optimistic vs pessimistic concurrency control',
            ],
        },
        {
            topic: 'Indexing & Hashing',
            tip: 'Revise B+ tree structure and operations. Understand clustered vs non-clustered.',
            study: [
                'Understand dense vs sparse indexes and primary vs secondary indexes',
                'Study B-tree and B+ tree structure, insertion, and deletion',
                'Learn hash-based indexing — static vs dynamic hashing',
                'Understand clustered vs non-clustered indexes and their performance impact',
                'Study query optimization basics — cost estimation and index selection',
            ],
            problems: [
                'Insert keys 10, 20, 5, 15, 30 into a B+ tree of order 3 step by step',
                'Delete key 20 from the B+ tree above and show the result',
                'Why is B+ tree preferred over B-tree for database indexes?',
                'Given a query, explain when a full table scan beats using an index',
                'Design indexes for a query: SELECT * FROM orders WHERE customer_id=5 AND date>\'2024-01-01\'',
            ],
        },
        {
            topic: 'Past Papers',
            tip: 'Focus on SQL writing and normalization problems — most frequently asked.',
            study: [
                'Solve past papers categorized by topic',
                'Focus extra time on normalization and SQL — highest weightage topics',
                'Revise transaction schedules and serializability checks',
                'Make a formula sheet for normalization steps and SQL syntax',
                'Explain each topic to yourself out loud as if teaching a classmate',
            ],
            problems: [
                'Solve one full past paper in exam conditions',
                'Write 5 complex SQL queries without any reference',
                'Normalize a given relation from scratch to BCNF',
                'Draw and analyze a transaction schedule for conflict serializability',
                'Predict top 5 questions for this exam based on past patterns',
            ],
        },
    ],
    network: [
        {
            topic: 'OSI & TCP/IP Model',
            tip: 'Memorize all 7 OSI layers with protocols. Know where routers and switches operate.',
            study: [
                'Memorize all 7 OSI layers and the mnemonic: Please Do Not Throw Sausage Pizza Away',
                'Know at least 2 protocols at each layer',
                'Understand the function of each layer clearly',
                'Compare OSI vs TCP/IP model — which layers are merged',
                'Know which devices operate at which layer — hub (L1), switch (L2), router (L3)',
            ],
            problems: [
                'List all 7 OSI layers with their functions and 2 protocols each',
                'Where does SSL/TLS operate in the OSI model? Justify.',
                'Why does TCP/IP merge the top 3 OSI layers into Application layer?',
                'Trace a web request from browser to server through all OSI layers',
                'What is encapsulation and decapsulation? Show it across layers.',
            ],
        },
        {
            topic: 'IP Addressing & Subnetting',
            tip: 'Practice subnetting problems — find network address, broadcast, and host range.',
            study: [
                'Understand IPv4 address classes A, B, C, D, E and their default masks',
                'Learn CIDR notation and how to calculate hosts per subnet',
                'Study subnetting — borrowing bits, calculating subnets and hosts',
                'Understand private IP ranges and why they exist',
                'Learn IPv6 basics — address format, types, and why we need it',
            ],
            problems: [
                'Given 192.168.10.0/26 — find network address, broadcast, first and last host',
                'Divide 172.16.0.0/16 into 8 equal subnets — show all subnet details',
                'A company needs 500 hosts — what is the minimum subnet mask?',
                'Convert IP 192.168.1.130/27 to binary and find its subnet',
                'List all private IP address ranges and their use cases',
            ],
        },
        {
            topic: 'Routing Algorithms',
            tip: 'Understand Distance Vector vs Link State. Solve routing table problems manually.',
            study: [
                'Understand Distance Vector routing — Bellman-Ford, routing by rumor',
                'Study Link State routing — Dijkstra\'s algorithm, OSPF',
                'Learn the count-to-infinity problem and split horizon solution',
                'Understand BGP basics for inter-domain routing',
                'Study routing table structure and how forwarding decisions are made',
            ],
            problems: [
                'Apply Dijkstra\'s algorithm on a given network graph — show all steps',
                'Show how count-to-infinity occurs with a simple 3-node example',
                'Compare Distance Vector and Link State on convergence, overhead, scalability',
                'Build a routing table for a router with 4 interfaces',
                'What happens when a link fails in OSPF vs RIP?',
            ],
        },
        {
            topic: 'TCP vs UDP',
            tip: 'Know the differences deeply — 3-way handshake, flow control, congestion control.',
            study: [
                'Study TCP segment structure and all header fields',
                'Understand 3-way handshake (SYN, SYN-ACK, ACK) and 4-way termination',
                'Learn TCP flow control — sliding window and window size',
                'Study TCP congestion control — slow start, congestion avoidance, fast retransmit',
                'Know UDP header structure and when UDP is preferred over TCP',
            ],
            problems: [
                'Draw the TCP 3-way handshake with sequence numbers shown',
                'Sender window = 8, receiver window = 5 — what is the effective window?',
                'Trace TCP slow start from scratch until congestion occurs',
                'Why does DNS use UDP but file transfer uses TCP?',
                'What happens if a SYN packet is lost during TCP connection setup?',
            ],
        },
        {
            topic: 'DNS, HTTP & HTTPS',
            tip: 'Trace a full browser request through DNS → TCP → HTTP. Know all status codes.',
            study: [
                'Understand DNS hierarchy — root, TLD, authoritative servers',
                'Study DNS resolution — recursive vs iterative queries',
                'Learn HTTP methods — GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Understand HTTP status codes — 1xx, 2xx, 3xx, 4xx, 5xx',
                'Study HTTPS — TLS handshake, certificates, and encryption process',
            ],
            problems: [
                'Trace the full resolution of www.google.com from browser to IP address',
                'What is the difference between HTTP/1.1, HTTP/2, and HTTP/3?',
                'When should you use POST vs PUT? What is idempotency?',
                'What happens during a TLS handshake? Draw the message sequence.',
                'Explain what a 301 vs 302 redirect means and when to use each',
            ],
        },
        {
            topic: 'Past Papers',
            tip: 'Focus on subnetting numericals and protocol comparison — most marks come from these.',
            study: [
                'Solve past papers and categorize weak areas',
                'Practice 10 subnetting problems under time pressure',
                'Revise all protocol comparisons — TCP vs UDP, OSI vs TCP/IP, RIP vs OSPF',
                'Write a quick-reference sheet for all port numbers and protocols',
                'Explain the full internet request cycle to yourself from memory',
            ],
            problems: [
                'Solve one full past paper in exam conditions',
                'Do 5 subnetting problems without a calculator',
                'Write TCP and UDP header fields from memory',
                'Compare RIP, OSPF, and BGP across 5 parameters',
                'Trace a complete HTTPS web request from URL entry to page load',
            ],
        },
    ],
    dsa: [
        {
            topic: 'Sorting Algorithms',
            tip: 'Know time & space complexity of all sorts. Trace through with a small array.',
            study: [
                'Revise Bubble, Selection, Insertion sort — O(n²) algorithms',
                'Study Merge Sort — divide and conquer, stable, O(n log n)',
                'Learn Quick Sort — partition logic, pivot selection, average vs worst case',
                'Understand Heap Sort — build heap, extract max, O(n log n)',
                'Study non-comparison sorts — Counting, Radix, Bucket sort',
            ],
            problems: [
                'Sort [64, 25, 12, 22, 11] using Merge Sort — show every step',
                'Sort [10, 80, 30, 90, 40] using Quick Sort with first element as pivot',
                'Which sorting algorithm is best for nearly sorted data and why?',
                'When would you use Counting Sort over Quick Sort?',
                'Write the recurrence relation for Merge Sort and solve using Master Theorem',
            ],
        },
        {
            topic: 'Dynamic Programming',
            tip: 'Solve Knapsack, LCS, LIS, Coin Change. Always identify overlapping subproblems first.',
            study: [
                'Understand memoization (top-down) vs tabulation (bottom-up)',
                'Study 0/1 Knapsack — define subproblems, build DP table',
                'Learn Longest Common Subsequence — understand the recurrence',
                'Study Coin Change problem — minimum coins and number of ways',
                'Learn Longest Increasing Subsequence and Matrix Chain Multiplication',
            ],
            problems: [
                'Solve 0/1 Knapsack: weights=[2,3,4,5], values=[3,4,5,6], capacity=5',
                'Find LCS of "ABCBDAB" and "BDCAB" — show the DP table',
                'Minimum coins for amount=11, coins=[1,5,6,9]',
                'Find LIS of [10, 9, 2, 5, 3, 7, 101, 18]',
                'Convert recursive Fibonacci to DP and compare time complexity',
            ],
        },
        {
            topic: 'Graph Algorithms',
            tip: 'Practice BFS, DFS, Dijkstra, Bellman-Ford, Kruskal, Prim with traced examples.',
            study: [
                'Understand BFS — level-by-level traversal, shortest path in unweighted graphs',
                'Study DFS — recursion, stack-based, topological sort, cycle detection',
                'Learn Dijkstra\'s algorithm — greedy, single source shortest path',
                'Study Bellman-Ford — handles negative weights, detects negative cycles',
                'Learn MST algorithms — Kruskal (edge-based) and Prim (vertex-based)',
            ],
            problems: [
                'Perform BFS and DFS on a given graph — list visit order',
                'Find shortest path from A to all nodes using Dijkstra — show each step',
                'Apply Bellman-Ford — detect if a negative cycle exists',
                'Find MST using Kruskal\'s algorithm — show sorted edges and union-find steps',
                'Find topological sort of a DAG using DFS',
            ],
        },
        {
            topic: 'Past Papers',
            tip: 'Complexity analysis and DP problems are asked every year — prioritize these.',
            study: [
                'Solve past papers under exam conditions',
                'Focus extra on DP problems — these take most time and carry most marks',
                'Practice writing recurrence relations for any given problem',
                'Revise Big-O, Omega, Theta notation and Master Theorem',
                'Build a formula sheet for all algorithm complexities',
            ],
            problems: [
                'Solve one full past paper in exam conditions',
                'Write time and space complexity for 10 algorithms from memory',
                'Solve 3 DP problems you have never seen before',
                'Prove the time complexity of Merge Sort using recurrence',
                'Predict the most likely DP problem for this year\'s exam',
            ],
        },
    ],
    default: [
        {
            topic: 'Fundamentals',
            tip: 'Start with core principles. Write a one-page summary in your own words.',
            study: [
                'Read the first 2 chapters or units of your textbook/notes',
                'Write key definitions and terms in your own words',
                'Make a mind map connecting all major concepts',
                'Watch one lecture or explanation video for any unclear concept',
                'Identify the 3 most important topics in this subject',
            ],
            problems: [
                'Write a one-page summary of the subject without looking at notes',
                'List 10 key terms and define each from memory',
                'Explain the most important concept to an imaginary classmate',
                'Find 3 real-world applications of this subject',
                'Write down the 3 things you find most confusing — research each',
            ],
        },
        {
            topic: 'Core Concepts Deep Dive',
            tip: 'Pick the hardest subtopic and spend the full session on it.',
            study: [
                'Identify your weakest topic and start with it today',
                'Read the theory section completely without skipping',
                'Make detailed notes with your own examples',
                'Cross-reference at least 2 sources for difficult concepts',
                'Summarize each concept in one clear sentence',
            ],
            problems: [
                'Explain the hardest concept in this subject in simple terms',
                'Create your own example problem and solve it',
                'Find connections between 3 different concepts in this subject',
                'Write 5 questions you might be asked in an exam on this topic',
                'Answer those 5 questions without looking at your notes',
            ],
        },
        {
            topic: 'Problem Solving Practice',
            tip: 'Solve problems without notes first. Struggle builds memory.',
            study: [
                'Collect practice problems from textbook exercises',
                'Attempt every problem before looking at solutions',
                'Analyze your wrong answers — understand exactly why they were wrong',
                'Redo all incorrect problems the next day without notes',
                'Time yourself on problem sets to build exam-speed accuracy',
            ],
            problems: [
                'Solve 10 practice problems from your textbook/notes',
                'Pick the 3 hardest problems and solve them step by step',
                'For every wrong answer, write the correct approach in one paragraph',
                'Create 2 original problems and solve them',
                'Explain your solution method for the hardest problem out loud',
            ],
        },
        {
            topic: 'Revision & Active Recall',
            tip: 'Close your notes and write down everything you remember. Then check gaps.',
            study: [
                'Close all notes and write everything you remember about this subject',
                'Use spaced repetition — review topics from 2 days ago',
                'Create flashcards for key facts, formulas, and definitions',
                'Teach the topic to yourself out loud as if lecturing',
                'Identify remaining gaps and fill them with targeted reading',
            ],
            problems: [
                'Write all formulas and key facts from memory — check against notes',
                'Attempt 5 questions you got wrong previously',
                'Summarize each major topic in 3 sentences or less',
                'Create a 1-page cheat sheet for this subject',
                'Answer: what are the 5 most important things to know for the exam?',
            ],
        },
        {
            topic: 'Past Papers',
            tip: 'Simulate exam conditions — no phone, timer on. Review all mistakes immediately.',
            study: [
                'Collect last 5 years of past papers for this subject',
                'Identify which topics are asked every year — highest priority',
                'Note the exact question format — theory, numerical, or application',
                'Build a list of predicted questions based on patterns',
                'Make sure you can answer every past paper question confidently',
            ],
            problems: [
                'Solve one complete past paper under timed exam conditions',
                'Reattempt every question you got wrong without notes',
                'List all topics where you lost marks',
                'Write a final revision checklist based on past paper patterns',
                'Predict the 5 most likely questions for your upcoming exam',
            ],
        },
    ],
};

function getTopics(subject) {
    const lower = subject.toLowerCase();
    for (const key of Object.keys(topicsByKeyword)) {
        if (lower.includes(key)) return topicsByKeyword[key];
    }
    return topicsByKeyword.default.map(entry => ({
        ...entry,
        tip: entry.tip.replace('this subject', subject),
        study: entry.study.map(s => s.replace('this subject', subject).replace('the subject', subject)),
        problems: entry.problems.map(p => p.replace('this subject', subject).replace('the subject', subject)),
    }));
}

function generate() {
    const raw = document.getElementById('subjects').value.trim();
    const days = parseInt(document.getElementById('days').value);
    const hours = parseFloat(document.getElementById('hours').value);
    const exam = parseInt(document.getElementById('exam').value);
    const priority = document.getElementById('priority').value.toLowerCase();
    const err = document.getElementById('error');
    const out = document.getElementById('output');

    err.textContent = '';
    out.innerHTML = '';

    if (!raw) { err.textContent = 'Please enter your subjects first.'; return; }

    const allSubjects = raw.split(',').map(s => s.trim()).filter(Boolean);
    if (!allSubjects.length) { err.textContent = 'Could not parse subjects — use commas to separate them.'; return; }

    const sorted = [...allSubjects].sort((a, b) => {
        const ap = priority.includes(a.toLowerCase()) ? -1 : 0;
        const bp = priority.includes(b.toLowerCase()) ? -1 : 0;
        return ap - bp;
    });

    const slotsPerDay = Math.min(sorted.length, Math.max(2, Math.floor(hours)));
    const slotDuration = (hours / slotsPerDay).toFixed(1);
    const totalHours = (days * hours).toFixed(0);
    const hoursPerSubject = (totalHours / sorted.length).toFixed(1);

    let html = `<div class="summary">
    <div class="stat"><div class="stat-val">${totalHours}</div><div class="stat-lbl">Total study hours</div></div>
    <div class="stat"><div class="stat-val">${sorted.length}</div><div class="stat-lbl">Subjects</div></div>
    <div class="stat"><div class="stat-val">${hoursPerSubject}</div><div class="stat-lbl">Hrs per subject</div></div>
    <div class="stat"><div class="stat-val">${exam}</div><div class="stat-lbl">Days to exam</div></div>
  </div>`;

    let subjectIndex = 0;
    for (let d = 0; d < days; d++) {
        const dayName = dayNames[d % 7];
        const dayId = `day-${d}`;

        html += `<div class="schedule-day">
      <div class="day-header" onclick="toggleDay('${dayId}')">
        <span class="day-title">Day ${d + 1} — ${dayName}</span>
        <span class="day-arrow" id="arrow-${dayId}">▼</span>
      </div>
      <div class="day-body" id="${dayId}" style="display:none;">`;

        for (let s = 0; s < slotsPerDay; s++) {
            const subject = sorted[subjectIndex % sorted.length];
            const topics = getTopics(subject);
            const entry = topics[(d + s) % topics.length];
            const startHr = 9 + s * Math.ceil(parseFloat(slotDuration));
            const endHr = startHr + Math.ceil(parseFloat(slotDuration));
            const slotId = `slot-${d}-${s}`;

            html += `<div class="slot">
        <div class="slot-top" onclick="toggleSlot('${slotId}')">
          <div>
            <div class="slot-name">${subject} — ${entry.topic}</div>
            <div class="slot-topic">💡 ${entry.tip}</div>
          </div>
          <div class="slot-right">
            <div class="slot-meta">${slotDuration} hrs &nbsp;|&nbsp; ${startHr}:00 – ${endHr}:00</div>
            <div class="slot-expand-hint" id="hint-${slotId}">+ expand</div>
          </div>
        </div>
        <div class="slot-detail" id="${slotId}" style="display:none;">
          <div class="detail-section">
            <div class="detail-heading">📖 What to study</div>
            <ul>${entry.study.map(s => `<li>${s}</li>`).join('')}</ul>
          </div>
          <div class="detail-section">
            <div class="detail-heading">✏️ Problems to solve</div>
            <ol>${entry.problems.map(p => `<li>${p}</li>`).join('')}</ol>
          </div>
        </div>
      </div>`;

            subjectIndex++;
        }

        html += `</div></div>`;
    }

    let tip;
    if (exam <= 3) tip = '⚡ Exam is very close — focus only on high-yield topics and past papers. No new concepts.';
    else if (exam <= 7) tip = '📌 One week left — mix revision with practice questions every day.';
    else tip = '📚 You have good time — build concepts first, then shift to practice in the last week.';

    html += `<div class="tip-box">${tip}</div>`;
    out.innerHTML = html;
}

function toggleDay(id) {
    const body = document.getElementById(id);
    const arrow = document.getElementById(`arrow-${id}`);
    const open = body.style.display !== 'none';
    body.style.display = open ? 'none' : 'block';
    arrow.textContent = open ? '▼' : '▲';
}

function toggleSlot(id) {
    const detail = document.getElementById(id);
    const hint = document.getElementById(`hint-${id}`);
    const open = detail.style.display !== 'none';
    detail.style.display = open ? 'none' : 'block';
    hint.textContent = open ? '+ expand' : '− collapse';
}
