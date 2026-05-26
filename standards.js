const CCSS_MATH = {
  source: {
    name: "Common Core State Standards Initiative",
    url: "https://www.thecorestandards.org/Math/Content/7/introduction/",
    note: "CCSS text © 2010 National Governors Association Center for Best Practices and Council of Chief State School Officers."
  },
  practices: {
    "MP1": "Make sense of problems and persevere in solving them.",
    "MP2": "Reason abstractly and quantitatively.",
    "MP3": "Construct viable arguments and critique the reasoning of others.",
    "MP4": "Model with mathematics.",
    "MP5": "Use appropriate tools strategically.",
    "MP6": "Attend to precision.",
    "MP7": "Look for and make use of structure.",
    "MP8": "Look for and express regularity in repeated reasoning."
  },
  grades: {
    "7": {
      gradeLabel: "Grade 7",
      domains: [
        {
          code: "7.RP",
          name: "Ratios and Proportional Relationships",
          clusters: [
            {
              code: "7.RP.A",
              text: "Analyze proportional relationships and use them to solve real-world and mathematical problems.",
              standards: [
                { code: "7.RP.A.1", shortName: "Unit rates with fractions", text: "Compute unit rates associated with ratios of fractions, including ratios of lengths, areas and other quantities measured in like or different units.", prior: ["6.RP.A.2", "6.RP.A.3"], future: ["7.RP.A.2", "8.EE.B.5"] },
                { code: "7.RP.A.2", shortName: "Represent proportional relationships", text: "Recognize and represent proportional relationships between quantities.", prior: ["6.RP.A.2", "6.RP.A.3"], future: ["7.RP.A.3", "8.EE.B.5", "8.F.B.4"] },
                { code: "7.RP.A.3", shortName: "Multistep ratio and percent problems", text: "Use proportional relationships to solve multistep ratio and percent problems.", prior: ["6.RP.A.3", "7.RP.A.2"], future: ["8.EE.B.5", "8.F.B.4"] }
              ]
            }
          ]
        },
        {
          code: "7.NS",
          name: "The Number System",
          clusters: [
            {
              code: "7.NS.A",
              text: "Apply and extend previous understandings of operations with fractions.",
              standards: [
                { code: "7.NS.A.1", shortName: "Add and subtract rational numbers", text: "Apply and extend previous understandings of addition and subtraction to add and subtract rational numbers; represent addition and subtraction on a horizontal or vertical number line diagram.", prior: ["6.NS.C.5", "6.NS.C.6", "6.NS.C.7"], future: ["7.NS.A.3", "8.NS.A.1"] },
                { code: "7.NS.A.2", shortName: "Multiply and divide rational numbers", text: "Apply and extend previous understandings of multiplication and division and of fractions to multiply and divide rational numbers.", prior: ["6.NS.B.3", "6.NS.C.5"], future: ["7.NS.A.3", "8.NS.A.1"] },
                { code: "7.NS.A.3", shortName: "Solve problems with rational numbers", text: "Solve real-world and mathematical problems involving the four operations with rational numbers.", prior: ["7.NS.A.1", "7.NS.A.2"], future: ["7.EE.B.3", "8.EE.C.7"] }
              ]
            }
          ]
        },
        {
          code: "7.EE",
          name: "Expressions and Equations",
          clusters: [
            {
              code: "7.EE.A",
              text: "Use properties of operations to generate equivalent expressions.",
              standards: [
                { code: "7.EE.A.1", shortName: "Generate equivalent expressions", text: "Apply properties of operations as strategies to add, subtract, factor, and expand linear expressions with rational coefficients.", prior: ["6.EE.A.3", "6.EE.A.4"], future: ["8.EE.C.7", "A-SSE.A.1"] },
                { code: "7.EE.A.2", shortName: "Interpret equivalent expressions", text: "Understand that rewriting an expression in different forms in a problem context can shed light on the problem and how the quantities in it are related.", prior: ["6.EE.A.3", "6.EE.A.4"], future: ["8.EE.C.7", "A-SSE.B.3"] }
              ]
            },
            {
              code: "7.EE.B",
              text: "Solve real-life and mathematical problems using numerical and algebraic expressions and equations.",
              standards: [
                { code: "7.EE.B.3", shortName: "Multistep problems with rational numbers", text: "Solve multi-step real-life and mathematical problems posed with positive and negative rational numbers in any form, using tools strategically. Apply properties of operations to calculate with numbers in any form; convert between forms as appropriate; and assess the reasonableness of answers.", prior: ["7.NS.A.3", "6.EE.B.7"], future: ["8.EE.C.7", "8.F.B.4"] },
                { code: "7.EE.B.4", shortName: "Equations and inequalities from context", text: "Use variables to represent quantities in a real-world or mathematical problem, and construct simple equations and inequalities to solve problems by reasoning about the quantities.", prior: ["6.EE.B.6", "6.EE.B.7", "6.EE.B.8"], future: ["8.EE.C.7", "8.F.B.4"] }
              ]
            }
          ]
        },
        {
          code: "7.G",
          name: "Geometry",
          clusters: [
            {
              code: "7.G.A",
              text: "Draw, construct, and describe geometrical figures and describe the relationships between them.",
              standards: [
                { code: "7.G.A.1", shortName: "Scale drawings", text: "Solve problems involving scale drawings of geometric figures, including computing actual lengths and areas from a scale drawing and reproducing a scale drawing at a different scale.", prior: ["6.RP.A.3", "6.G.A.1"], future: ["8.G.A.4", "8.G.A.5"] },
                { code: "7.G.A.2", shortName: "Construct geometric shapes", text: "Draw geometric shapes with given conditions. Focus on constructing triangles from three measures of angles or sides, noticing when the conditions determine a unique triangle, more than one triangle, or no triangle.", prior: ["4.G.A.2", "5.G.B.3", "6.G.A.1"], future: ["8.G.A.5"] },
                { code: "7.G.A.3", shortName: "Slice three-dimensional figures", text: "Describe the two-dimensional figures that result from slicing three-dimensional figures.", prior: ["6.G.A.4"], future: ["8.G.C.9", "G-GMD.B.4"] }
              ]
            },
            {
              code: "7.G.B",
              text: "Solve real-life and mathematical problems involving angle measure, area, surface area, and volume.",
              standards: [
                { code: "7.G.B.4", shortName: "Area and circumference of circles", text: "Know the formulas for the area and circumference of a circle and use them to solve problems; give an informal derivation of the relationship between the circumference and area of a circle.", prior: ["6.G.A.1"], future: ["8.G.C.9", "G-C.B.5"] },
                { code: "7.G.B.5", shortName: "Angle relationships", text: "Use facts about supplementary, complementary, vertical, and adjacent angles in a multi-step problem to write and solve simple equations for an unknown angle in a figure.", prior: ["4.MD.C.5", "4.MD.C.7"], future: ["8.G.A.5", "G-CO.C.9"] },
                { code: "7.G.B.6", shortName: "Area, volume, and surface area", text: "Solve real-world and mathematical problems involving area, volume and surface area of two- and three-dimensional objects composed of triangles, quadrilaterals, polygons, cubes, and right prisms.", prior: ["6.G.A.1", "6.G.A.2", "6.G.A.4"], future: ["8.G.C.9", "G-GMD.A.3"] }
              ]
            }
          ]
        },
        {
          code: "7.SP",
          name: "Statistics and Probability",
          clusters: [
            {
              code: "7.SP.A",
              text: "Use random sampling to draw inferences about a population.",
              standards: [
                { code: "7.SP.A.1", shortName: "Random samples and populations", text: "Understand that statistics can be used to gain information about a population by examining a sample of the population. Understand that random sampling tends to produce representative samples and support valid inferences.", prior: ["6.SP.A.1", "6.SP.A.2", "6.SP.B.5"], future: ["S-IC.A.1", "S-IC.B.3"] },
                { code: "7.SP.A.2", shortName: "Use samples to draw inferences", text: "Use data from a random sample to draw inferences about a population with an unknown characteristic of interest. Generate multiple samples of the same size to gauge variation in estimates or predictions.", prior: ["6.SP.B.5", "7.SP.A.1"], future: ["S-IC.B.4", "S-IC.B.5"] }
              ]
            },
            {
              code: "7.SP.B",
              text: "Draw informal comparative inferences about two populations.",
              standards: [
                { code: "7.SP.B.3", shortName: "Compare populations informally", text: "Informally assess the degree of visual overlap of two numerical data distributions with similar variabilities, measuring the difference between the centers by expressing it as a multiple of a measure of variability.", prior: ["6.SP.B.4", "6.SP.B.5"], future: ["S-ID.A.2", "S-ID.A.3"] },
                { code: "7.SP.B.4", shortName: "Use measures of center and variability", text: "Use measures of center and measures of variability for numerical data from random samples to draw informal comparative inferences about two populations.", prior: ["6.SP.B.5", "7.SP.B.3"], future: ["S-ID.A.2", "S-ID.A.3"] }
              ]
            },
            {
              code: "7.SP.C",
              text: "Investigate chance processes and develop, use, and evaluate probability models.",
              standards: [
                { code: "7.SP.C.5", shortName: "Probability as likelihood", text: "Understand that the probability of a chance event is a number between 0 and 1 that expresses the likelihood of the event occurring.", prior: ["6.RP.A.3"], future: ["7.SP.C.6", "S-CP.A.1"] },
                { code: "7.SP.C.6", shortName: "Approximate probability", text: "Approximate the probability of a chance event by collecting data on the chance process that produces it and observing its long-run relative frequency. Predict the approximate relative frequency given the probability.", prior: ["7.SP.C.5"], future: ["7.SP.C.7", "S-CP.A.2"] },
                { code: "7.SP.C.7", shortName: "Develop probability models", text: "Develop a probability model and use it to find probabilities of events. Compare probabilities from a model to observed frequencies.", prior: ["7.SP.C.5", "7.SP.C.6"], future: ["7.SP.C.8", "S-CP.A.2"] },
                { code: "7.SP.C.8", shortName: "Compound events", text: "Find probabilities of compound events using organized lists, tables, tree diagrams, and simulation.", prior: ["7.SP.C.7"], future: ["S-CP.B.6", "S-CP.B.7"] }
              ]
            }
          ]
        }
      ]
    }
  }
};

function getGradeStandards(grade = "7") {
  const gradeData = CCSS_MATH.grades[grade];
  if (!gradeData) return [];
  return gradeData.domains.flatMap(domain =>
    domain.clusters.flatMap(cluster =>
      cluster.standards.map(standard => ({
        ...standard,
        domainCode: domain.code,
        domainName: domain.name,
        clusterCode: cluster.code,
        clusterText: cluster.text,
        gradeLabel: gradeData.gradeLabel
      }))
    )
  );
}
