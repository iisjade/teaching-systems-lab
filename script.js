const form = document.getElementById("scaffoldForm");
const output = document.getElementById("output");
const copyButton = document.getElementById("copyOutput");
const markdownButton = document.getElementById("downloadMarkdown");
const loadExample = document.getElementById("loadExample");

let currentMarkdown = "";

const examples = {
  discounts: {
    gradeLevel: "Grade 7",
    mathTopic: "Percent increase and decrease",
    learningGoal: "Students will compare percent and dollar discounts, find final prices, and justify which deal is better.",
    taskText: "A student is comparing two discounts on the same $80 jacket. Store A takes 25% off. Store B takes $18 off. Which store has the better deal? Explain using numbers, words, or a representation."
  },
  recipe: {
    gradeLevel: "Grade 7",
    mathTopic: "Proportional relationships",
    learningGoal: "Students will use equivalent ratios to scale a recipe and explain the constant relationship between quantities.",
    taskText: "A recipe uses 3 cups of flour for every 2 cups of sugar. How much flour is needed for 7 cups of sugar? Show your reasoning with a table, diagram, or equation."
  },
  rental: {
    gradeLevel: "Grade 8",
    mathTopic: "Linear relationships",
    learningGoal: "Students will interpret slope and y-intercept in context and write an equation for a linear relationship.",
    taskText: "A bike rental costs $12 to start plus $4 per hour. Write an equation for the total cost after h hours and explain what each number means."
  }
};

const randomExampleKeys = Object.keys(examples);

function getValue(id) {
  return document.getElementById(id).value.trim();
}

function topicKind(topic) {
  const lower = topic.toLowerCase();

  if (lower.includes("percent")) return "percent";
  if (lower.includes("proportional") || lower.includes("ratio")) return "proportional";
  if (lower.includes("linear") || lower.includes("slope")) return "linear";
  if (lower.includes("circle") || lower.includes("area") || lower.includes("geometry")) return "geometry";
  return "general";
}

function accessibleLaunch(kind) {
  const launches = {
    percent: "First, identify the original amount. Then decide whether the situation is an increase or decrease. Find the amount of change and use it to find the final amount.",
    proportional: "First, identify the two quantities being compared. Then look for the repeated ratio or scale factor. Use a table, equation, or diagram to show how the quantities stay connected.",
    linear: "First, identify the starting value and the rate of change. Then write or interpret an equation that shows how the total changes.",
    geometry: "First, identify the shape and the measurements you know. Then choose a representation or formula that matches the situation.",
    general: "First, identify the quantities in the problem. Then choose a representation that helps you show the relationship between them. Finally, solve and explain why your answer makes sense."
  };

  return launches[kind];
}

function getVocabulary(kind) {
  const sets = {
    percent: [
      ["original amount", "the starting amount before a change"],
      ["discount / markdown", "a decrease in price"],
      ["sale price", "the price after the discount"],
      ["percent decrease", "how much something goes down compared to the original amount"],
      ["explain", "show your thinking using words, numbers, or a model"]
    ],
    proportional: [
      ["ratio", "a comparison of two quantities"],
      ["constant of proportionality", "the number that connects the two quantities"],
      ["for every", "language that shows a repeated ratio"],
      ["equivalent ratios", "ratios that have the same value"],
      ["reasoning", "the thinking that explains why an answer makes sense"]
    ],
    linear: [
      ["slope", "the rate of change"],
      ["y-intercept", "the starting value when x is 0"],
      ["equation", "a math sentence with variables"],
      ["rate", "how one quantity changes compared to another"],
      ["context", "the real-world meaning of the numbers"]
    ],
    geometry: [
      ["measurement", "a number that describes size, length, area, or volume"],
      ["formula", "a rule that connects measurements"],
      ["area", "the amount of space inside a flat shape"],
      ["circumference", "the distance around a circle"],
      ["justify", "explain why your method makes sense"]
    ],
    general: [
      ["quantity", "an amount that can be measured or counted"],
      ["represent", "show using words, numbers, tables, graphs, or equations"],
      ["strategy", "a way to solve a problem"],
      ["justify", "explain why your answer makes sense"],
      ["compare", "describe what is the same and what is different"]
    ]
  };

  return sets[kind] || sets.general;
}

function getSpanishVocabulary(kind) {
  const sets = {
    percent: [
      ["original amount", "cantidad original"],
      ["discount / markdown", "descuento / rebaja"],
      ["sale price", "precio de oferta"],
      ["percent decrease", "disminución porcentual"],
      ["explain", "explicar"]
    ],
    proportional: [
      ["ratio", "razón"],
      ["for every", "por cada"],
      ["equivalent ratios", "razones equivalentes"],
      ["table", "tabla"],
      ["reasoning", "razonamiento"]
    ],
    linear: [
      ["slope", "pendiente"],
      ["y-intercept", "intersección con el eje y / valor inicial"],
      ["equation", "ecuación"],
      ["rate", "tasa"],
      ["context", "contexto"]
    ],
    geometry: [
      ["measurement", "medida"],
      ["formula", "fórmula"],
      ["area", "área"],
      ["circumference", "circunferencia"],
      ["justify", "justificar"]
    ],
    general: [
      ["quantity", "cantidad"],
      ["represent", "representar"],
      ["strategy", "estrategia"],
      ["justify", "justificar"],
      ["compare", "comparar"]
    ]
  };

  return sets[kind] || sets.general;
}

function getSentenceFrames(kind) {
  const sets = {
    percent: [
      "The original amount is ____.",
      "The percent change is ____.",
      "I found ____% of ____ by ____.",
      "The new amount is ____ because ____.",
      "My answer makes sense because ____."
    ],
    proportional: [
      "The ratio is ____ to ____.",
      "For every ____, there are ____.",
      "I scaled the ratio by ____ because ____.",
      "This relationship is/is not proportional because ____.",
      "I know my answer makes sense because ____."
    ],
    linear: [
      "The starting value is ____.",
      "The rate of change is ____ per ____.",
      "The equation is ____ because ____.",
      "In this situation, ____ means ____.",
      "I can check my answer by ____."
    ],
    geometry: [
      "The shape I am working with is ____.",
      "The measurements I know are ____.",
      "I chose this formula/strategy because ____.",
      "My answer represents ____.",
      "I can check whether my answer is reasonable by ____."
    ],
    general: [
      "First, I noticed ____.",
      "I represented the problem by ____.",
      "My strategy was ____.",
      "I agree/disagree because ____.",
      "The answer makes sense because ____."
    ]
  };

  return sets[kind] || sets.general;
}

function getMisconceptions(kind) {
  const sets = {
    percent: [
      "Using the percent as the final answer instead of finding the amount of change.",
      "Subtracting 25 from 80 instead of finding 25% of 80.",
      "Confusing the amount of discount with the final sale price.",
      "Using the sale price as the original amount when explaining."
    ],
    proportional: [
      "Adding the same amount instead of multiplying by the same factor.",
      "Mixing up which quantity belongs in each column.",
      "Assuming every table is proportional without checking the ratio.",
      "Giving an answer without explaining the scaling factor."
    ],
    linear: [
      "Confusing the starting value with the rate of change.",
      "Writing an equation with the numbers reversed.",
      "Describing slope as just a number instead of a rate in context.",
      "Forgetting that the y-intercept is the value when x equals 0."
    ],
    geometry: [
      "Using the wrong measurement for the formula.",
      "Confusing area with perimeter or circumference.",
      "Forgetting to include units.",
      "Treating a formula as a procedure without explaining why it fits the situation."
    ],
    general: [
      "Focusing on keywords instead of the structure of the problem.",
      "Skipping a representation that would make the math visible.",
      "Writing an answer without justification.",
      "Confusing the quantities in the problem."
    ]
  };

  return sets[kind] || sets.general;
}

function renderList(items) {
  return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function renderVocabulary(rows) {
  return `<ul>${rows.map(([term, definition]) => `<li><strong>${term}:</strong> ${definition}</li>`).join("")}</ul>`;
}

function listToMarkdown(items) {
  return items.map(item => `- ${item}`).join("\n");
}

function vocabToMarkdown(rows) {
  return rows.map(([term, definition]) => `- **${term}:** ${definition}`).join("\n");
}

function buildMarkdown(data, scaffold) {
  const spanishBlock = data.spanishSupport === "No Spanish support" ? "" : `
## Spanish support

${vocabToMarkdown(scaffold.spanishVocab)}

${data.spanishSupport === "Include Spanish vocabulary and sentence frames" ? `
**Sentence frames**

- El/la ____ original es ____.
- La pregunta me pide encontrar ____.
- Mi estrategia fue ____.
- Sé que mi respuesta tiene sentido porque ____.
` : ""}
`;

  return `# Math Language Scaffold

**Grade level:** ${data.gradeLevel}  
**Math topic:** ${data.mathTopic}  
**Student language needs:** ${data.languageNeeds}

## Original task

${data.taskText}

## Student-friendly launch

${scaffold.launch}

## Learning goal

${data.learningGoal}

## Key vocabulary

${vocabToMarkdown(scaffold.vocab)}

## Sentence frames

${listToMarkdown(scaffold.frames)}

${spanishBlock}

## Teacher launch script

Today we are solving a ${data.mathTopic.toLowerCase()} problem. Before we calculate, we will identify the quantities: what amount we start with, what is changing, and what the question asks us to find. You may use a table, diagram, equation, or words to show your thinking.

## Likely misconceptions to watch for

${listToMarkdown(scaffold.misconceptions)}

## Check for understanding

- What is the starting amount or starting value?
- What quantity changes?
- Are we finding a change amount, a final amount, or a relationship?
- How can you represent your strategy another way?
`;
}

function generateScaffold(data) {
  const kind = topicKind(data.mathTopic);
  const scaffold = {
    launch: accessibleLaunch(kind),
    vocab: getVocabulary(kind),
    spanishVocab: getSpanishVocabulary(kind),
    frames: getSentenceFrames(kind),
    misconceptions: getMisconceptions(kind)
  };

  currentMarkdown = buildMarkdown(data, scaffold);

  const spanishBlock = data.spanishSupport === "No Spanish support" ? "" : `
    <section>
      <h3>Spanish support</h3>
      ${data.spanishSupport === "Include Spanish vocabulary only"
        ? renderVocabulary(scaffold.spanishVocab)
        : `${renderVocabulary(scaffold.spanishVocab)}
          <p><strong>Sentence frames:</strong></p>
          ${renderList([
            "El/la ____ original es ____.",
            "La pregunta me pide encontrar ____.",
            "Mi estrategia fue ____.",
            "Sé que mi respuesta tiene sentido porque ____."
          ])}`
      }
    </section>
  `;

  return `
    <section>
      <h3>Student-friendly task</h3>
      <p><strong>Original task:</strong> ${data.taskText}</p>
      <p><strong>Accessible launch:</strong> ${scaffold.launch}</p>
    </section>

    <section>
      <h3>Learning goal</h3>
      <p>${data.learningGoal}</p>
    </section>

    <section>
      <h3>Key vocabulary</h3>
      ${renderVocabulary(scaffold.vocab)}
    </section>

    <section>
      <h3>Sentence frames</h3>
      ${renderList(scaffold.frames)}
    </section>

    ${spanishBlock}

    <section>
      <h3>Teacher launch script</h3>
      <p>
        Today we are solving a ${data.mathTopic.toLowerCase()} problem. Before we calculate, we will identify the quantities:
        what amount we start with, what is changing, and what the question asks us to find.
        You may use a table, diagram, equation, or words to show your thinking.
      </p>
    </section>

    <section>
      <h3>Likely misconceptions to watch for</h3>
      ${renderList(scaffold.misconceptions)}
    </section>

    <section>
      <h3>Check for understanding</h3>
      ${renderList([
        "What is the starting amount or starting value?",
        "What quantity changes?",
        "Are we finding a change amount, a final amount, or a relationship?",
        "How can you represent your strategy another way?"
      ])}
    </section>
  `;
}

function loadExampleByKey(key, shouldGenerate = true) {
  const example = examples[key];
  if (!example) return;

  document.getElementById("gradeLevel").value = example.gradeLevel;
  document.getElementById("mathTopic").value = example.mathTopic;
  document.getElementById("learningGoal").value = example.learningGoal;
  document.getElementById("taskText").value = example.taskText;

  if (shouldGenerate) {
    const data = {
      gradeLevel: example.gradeLevel,
      mathTopic: example.mathTopic,
      learningGoal: example.learningGoal,
      taskText: example.taskText,
      languageNeeds: getValue("languageNeeds"),
      spanishSupport: getValue("spanishSupport")
    };

    output.innerHTML = generateScaffold(data);
    document.getElementById("tool").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = {
    gradeLevel: getValue("gradeLevel"),
    mathTopic: getValue("mathTopic"),
    learningGoal: getValue("learningGoal"),
    taskText: getValue("taskText"),
    languageNeeds: getValue("languageNeeds"),
    spanishSupport: getValue("spanishSupport")
  };

  output.innerHTML = generateScaffold(data);
});

copyButton.addEventListener("click", async () => {
  const text = output.innerText.trim();

  if (!text || text.includes("Generate a scaffold")) {
    return;
  }

  await navigator.clipboard.writeText(text);
  copyButton.textContent = "Copied";
  setTimeout(() => {
    copyButton.textContent = "Copy text";
  }, 1400);
});

markdownButton.addEventListener("click", () => {
  if (!currentMarkdown) {
    const data = {
      gradeLevel: getValue("gradeLevel"),
      mathTopic: getValue("mathTopic"),
      learningGoal: getValue("learningGoal"),
      taskText: getValue("taskText"),
      languageNeeds: getValue("languageNeeds"),
      spanishSupport: getValue("spanishSupport")
    };
    output.innerHTML = generateScaffold(data);
  }

  const blob = new Blob([currentMarkdown], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "math-language-scaffold.md";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});

loadExample.addEventListener("click", () => {
  const key = randomExampleKeys[Math.floor(Math.random() * randomExampleKeys.length)];
  loadExampleByKey(key, false);
});

document.querySelectorAll(".example-loader").forEach((button) => {
  button.addEventListener("click", () => {
    loadExampleByKey(button.dataset.example, true);
  });
});

// Rubric Generator

const rubricForm = document.getElementById("rubricForm");
const rubricOutput = document.getElementById("rubricOutput");
const copyRubricOutput = document.getElementById("copyRubricOutput");
const downloadRubricMarkdown = document.getElementById("downloadRubricMarkdown");
const loadRubricExample = document.getElementById("loadRubricExample");
const rubricStandard = document.getElementById("rubricStandard");
const customStandardLabel = document.getElementById("customStandardLabel");

let currentRubricMarkdown = "";

const standardDetails = {
  "7.RP.A.3": {
    title: "7.RP.A.3",
    text: "Use proportional relationships to solve multistep ratio and percent problems.",
    focus: "proportional reasoning, percent change, multistep problem solving, and explanation"
  },
  "7.RP.A.2": {
    title: "7.RP.A.2",
    text: "Recognize and represent proportional relationships between quantities.",
    focus: "tables, graphs, equations, constant of proportionality, and reasoning about proportional relationships"
  },
  "7.G.B.4": {
    title: "7.G.B.4",
    text: "Know the formulas for the area and circumference of a circle and use them to solve problems.",
    focus: "circle measurements, formulas, units, and interpreting quantities in context"
  },
  "8.F.B.4": {
    title: "8.F.B.4",
    text: "Construct a function to model a linear relationship between two quantities.",
    focus: "linear relationships, rate of change, initial value, equations, and interpretation in context"
  }
};

function getRubricValue(id) {
  return document.getElementById(id).value.trim();
}

function selectedStandardInfo() {
  const selected = getRubricValue("rubricStandard");

  if (selected === "custom") {
    return {
      title: "Custom standard",
      text: getRubricValue("customStandardText") || "Custom standard text not provided.",
      focus: "the selected mathematical goal, student reasoning, and clarity of explanation"
    };
  }

  return standardDetails[selected];
}

function rubricRows(emphasis) {
  const communicationFocus = emphasis.toLowerCase().includes("communication");
  const representationFocus = emphasis.toLowerCase().includes("representation");
  const accuracyFocus = emphasis.toLowerCase().includes("accuracy");

  return [
    {
      level: "4",
      label: "Exceeds standard",
      description: representationFocus
        ? "Accurately solves the task, uses multiple appropriate representations, and clearly connects the representations to the mathematical relationship."
        : communicationFocus
          ? "Accurately solves the task and gives a clear, complete explanation using precise mathematical language."
          : accuracyFocus
            ? "Solves accurately and efficiently, with work that is complete, organized, and mathematically valid."
            : "Shows strong conceptual understanding, solves accurately, and explains why the strategy works."
    },
    {
      level: "3",
      label: "Meets standard",
      description: representationFocus
        ? "Solves the task and uses an appropriate representation that supports the reasoning."
        : communicationFocus
          ? "Solves the task and explains the reasoning in a way that is understandable and mathematically connected."
          : accuracyFocus
            ? "Solves the task accurately with enough work shown to support the answer."
            : "Shows grade-level understanding, solves the main task, and gives a reasonable explanation."
    },
    {
      level: "2",
      label: "Approaching standard",
      description: "Shows partial understanding. The strategy may be incomplete, the explanation may be unclear, or the work may include a mathematical error that affects the final answer."
    },
    {
      level: "1",
      label: "Beginning",
      description: "Shows limited evidence of understanding. The response may identify some relevant information but does not yet show a complete or valid strategy."
    }
  ];
}

function successCriteria(info, emphasis) {
  const base = [
    `I can identify the important quantities in the problem.`,
    `I can choose a strategy or representation that fits the task.`,
    `I can solve the problem accurately.`,
    `I can explain how my work connects to ${info.title}.`
  ];

  if (emphasis.toLowerCase().includes("representation")) {
    base.push("I can connect my representation to the numbers and context.");
  }

  if (emphasis.toLowerCase().includes("communication")) {
    base.push("I can use clear mathematical language in my explanation.");
  }

  return base;
}

function teacherLookFors(info) {
  return [
    `Evidence that the student understands the standard: ${info.text}`,
    "A strategy that matches the structure of the problem, not just keyword-based work.",
    "A representation, equation, or explanation that makes the student’s reasoning visible.",
    "Accurate use of units, labels, and quantities.",
    "A written or verbal explanation that connects the answer back to the context."
  ];
}

function renderRubricTable(rows) {
  return `
    <table class="rubric-table">
      <thead>
        <tr>
          <th>Level</th>
          <th>Descriptor</th>
          <th>Evidence</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(row => `
          <tr>
            <td><strong>${row.level}</strong></td>
            <td>${row.label}</td>
            <td>${row.description}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function rubricMarkdown(data, info, rows, criteria, lookFors) {
  return `# CCSS-Aligned Rubric

**Grade level:** ${data.gradeLevel}  
**Standard:** ${info.title}: ${info.text}  
**Task type:** ${data.taskType}  
**Student product:** ${data.studentProduct}  
**Emphasis:** ${data.emphasis}

## 1–4 Rubric

| Level | Descriptor | Evidence |
|---|---|---|
${rows.map(row => `| ${row.level} | ${row.label} | ${row.description} |`).join("\n")}

## Student-facing success criteria

${criteria.map(item => `- ${item}`).join("\n")}

## Teacher look-fors

${lookFors.map(item => `- ${item}`).join("\n")}

## Family-friendly explanation

This rubric looks at how well students understand and explain the mathematics, not just whether they get a final answer. A score of 3 means the student is meeting the grade-level expectation for this standard. A score of 4 shows especially strong reasoning, communication, or use of representations. Scores of 1 or 2 show that the student is still developing parts of the concept and needs more practice or support.
`;
}

function generateRubric() {
  const data = {
    gradeLevel: getRubricValue("rubricGradeLevel"),
    taskType: getRubricValue("rubricTaskType"),
    studentProduct: getRubricValue("rubricStudentProduct"),
    emphasis: getRubricValue("rubricEmphasis")
  };

  const info = selectedStandardInfo();
  const rows = rubricRows(data.emphasis);
  const criteria = successCriteria(info, data.emphasis);
  const lookFors = teacherLookFors(info);

  currentRubricMarkdown = rubricMarkdown(data, info, rows, criteria, lookFors);

  rubricOutput.innerHTML = `
    <section>
      <h3>Standard</h3>
      <p><strong>${info.title}:</strong> ${info.text}</p>
      <p><strong>Assessment focus:</strong> ${info.focus}</p>
    </section>

    <section>
      <h3>Task context</h3>
      <p><strong>Task type:</strong> ${data.taskType}</p>
      <p><strong>Student product:</strong> ${data.studentProduct}</p>
      <p><strong>Emphasis:</strong> ${data.emphasis}</p>
    </section>

    <section>
      <h3>1–4 Rubric</h3>
      ${renderRubricTable(rows)}
    </section>

    <section>
      <h3>Student-facing success criteria</h3>
      ${renderList(criteria)}
    </section>

    <section>
      <h3>Teacher look-fors</h3>
      ${renderList(lookFors)}
    </section>

    <section>
      <h3>Family-friendly explanation</h3>
      <p>
        This rubric looks at how well students understand and explain the mathematics, not just whether they get a final answer.
        A score of 3 means the student is meeting the grade-level expectation for this standard.
        A score of 4 shows especially strong reasoning, communication, or use of representations.
        Scores of 1 or 2 show that the student is still developing parts of the concept and needs more practice or support.
      </p>
    </section>
  `;
}

if (rubricStandard) {
  rubricStandard.addEventListener("change", () => {
    customStandardLabel.classList.toggle("hidden", rubricStandard.value !== "custom");
  });
}

if (rubricForm) {
  rubricForm.addEventListener("submit", (event) => {
    event.preventDefault();
    generateRubric();
  });
}

if (copyRubricOutput) {
  copyRubricOutput.addEventListener("click", async () => {
    const text = rubricOutput.innerText.trim();

    if (!text || text.includes("Generate a rubric")) {
      return;
    }

    await navigator.clipboard.writeText(text);
    copyRubricOutput.textContent = "Copied";
    setTimeout(() => {
      copyRubricOutput.textContent = "Copy text";
    }, 1400);
  });
}

if (downloadRubricMarkdown) {
  downloadRubricMarkdown.addEventListener("click", () => {
    if (!currentRubricMarkdown) {
      generateRubric();
    }

    const blob = new Blob([currentRubricMarkdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ccss-aligned-rubric.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}

if (loadRubricExample) {
  loadRubricExample.addEventListener("click", () => {
    document.getElementById("rubricGradeLevel").value = "Grade 7";
    document.getElementById("rubricStandard").value = "7.RP.A.3";
    document.getElementById("rubricTaskType").value = "Short constructed response";
    document.getElementById("rubricStudentProduct").value = "Students compare two discounts, calculate final prices, and justify which deal is better.";
    document.getElementById("rubricEmphasis").value = "Conceptual understanding and explanation";
    customStandardLabel.classList.add("hidden");
  });
}
