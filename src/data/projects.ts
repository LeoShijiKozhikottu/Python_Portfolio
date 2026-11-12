export const CALTRACKER_PROJECT_DATA = {
  title: "CalTracker: A Web-Based Calorie Tracker Powered by Gemini Vision",
  course: "CS13007 – Advanced Python Programming",
  student: "Leo Shiji",
  regNo: "23MIC0082",
  deploymentUrl: "https://caltracker-fit.vercel.app/",
  presentationUrl: "https://docs.google.com/presentation/d/1tWngwweqTkoXZwwsFks4ewspE9Y7OK58/edit?rtpof=true&sd=true",
  videoUrl: "https://drive.google.com/file/d/1ZDnQPVN33vRMqsUcZFXFxaTkgFgbg99G/view",
  videoFileName: "Screen Recording 2026-11-02 110715.mp4",
  audioUrl: "https://drive.google.com/file/d/1qrQ_rvdgNQQB2ehmpCnlmdywI27ewF6U/view",
  audioFileName: "New recording 12.mp3",
  mediumUrl: "https://medium.com/@leoshiji/my-first-encounter-with-python-022495d85126",
  
  // 10-Point Technical Writeup (Part B)
  writeup: {
    // 1. Title
    title: "CalTracker: A Web-Based Calorie Tracker Powered by Gemini Vision",
    
    // 2. Motivation
    motivation:
      "Many people want to manage their weight, fitness and eating habits, but searching for foods and typing in calories for every meal is slow and tedious, so most people give up within days. CalTracker removes that friction: the user simply takes a photo of their food and the app recognises it and estimates the nutrition, then adds it to the day's total.",

    // 3. Existing Gap / Motivating Event / USP
    gapAnalysis: [
      {
        aspect: "Gap",
        description:
          "Existing trackers rely on manual search and entry, have cluttered interfaces, and often hide basic features behind paid plans.",
      },
      {
        aspect: "Motivation",
        description:
          "The course project brief and a personal interest in fitness and health technology (also seen in the IoT eating-behaviour project in Part A).",
      },
      {
        aspect: "USP",
        description:
          "Photo-based food logging using Gemini Vision: snap a picture, get calories and macros instantly. Lightweight, browser-based, and shareable by link.",
      },
    ],

    // 4. Architecture
    architecture: {
      overview:
        "The CalTracker architecture comprises four decoupled layers that work seamlessly from food image capture to instant nutritional telemetry updates.",
      diagramSrc: "/images/figure3-caltracker-architecture.png",
      layers: [
        {
          name: "Presentation Layer",
          tech: "Browser UI (React / Tailwind)",
          role: "Client-side browser UI for uploading food photos, setting custom daily calorie & macro goals, viewing live progress bars, and managing meal histories.",
        },
        {
          name: "Application Layer",
          tech: "Web App (Vercel) UI + Logic",
          role: "Processes uploads, encodes images to base64, constructs structured prompt payloads, communicates with the Gemini Vision API, parses returned JSON, and manages state aggregation.",
        },
        {
          name: "AI / Vision Layer",
          tech: "Google Gemini Vision API",
          role: "Multimodal neural vision foundation model identifies ingredients, portions, estimates caloric density, and breaks down protein, carbohydrate, and fat macronutrients.",
        },
        {
          name: "Hosting Layer",
          tech: "Vercel Cloud Edge",
          role: "Global edge CDN deployment providing sub-second load times, continuous integration from Git, and secure environment variable secret management.",
        },
      ],
      flowSteps: [
        "User uploads meal photo / sets daily calorie goal in browser UI",
        "Vercel frontend logic converts photo to base64 with system nutrition prompt",
        "Gemini Vision API multimodal model processes image and predicts nutritional items",
        "Structured JSON response returned: food name, serving size, kcal, protein, carbs, fat",
        "Daily log dashboard aggregates totals and recalculates remaining calorie budget in real time",
      ],
    },

    // 5. Complete Tech Stack
    techStack: [
      {
        layer: "Frontend",
        technology: "HTML5, CSS3, JavaScript, React",
        description: "Modern component-based responsive user interface with drag-and-drop food image capture.",
      },
      {
        layer: "Backend / Logic",
        technology: "Python (course language) & Edge Serverless",
        description: "Core algorithmic calculations, data validation, and nutritional aggregation.",
      },
      {
        layer: "AI / Vision",
        technology: "Google Gemini API (Vision / Multimodal)",
        description: "Multimodal food item recognition, portion assessment, and automated macronutrient estimation.",
      },
      {
        layer: "Data Handling",
        technology: "pandas for tabular data, JSON for API responses",
        description: "Data parsing, structured schema validation, and tabular session persistence.",
      },
      {
        layer: "Hosting",
        technology: "Vercel",
        description: "Edge serverless cloud platform hosting the live application at caltracker-fit.vercel.app.",
      },
      {
        layer: "Version Control",
        technology: "Git & GitHub",
        description: "Distributed version control, branch isolation, and automated CI/CD deployment pipelines.",
      },
      {
        layer: "Documentation",
        technology: "Google Slides, Medium, Google Drive",
        description: "Comprehensive deliverables portfolio including slide deck, editorial article, demo video, and audio thesis.",
      },
    ],

    // 6. Datasets Used
    datasets: [
      {
        title: "Pretrained Gemini Vision Model",
        detail: "No custom training dataset required: zero-shot food recognition and nutrient classification performed directly by Google Gemini's pretrained multimodal weights.",
      },
      {
        title: "Runtime User Food Ingestion",
        detail: "Dynamic runtime user-submitted meal photographs uploaded via mobile camera or desktop file drag-and-drop.",
      },
      {
        title: "Course Exercise Dataset (GVI)",
        detail: "Green View Index (GVI) ranking of 30 global cities, analyzed using Python pandas for tabular practice (Part A, Item 1).",
      },
    ],

    // 7. Prompts Used for Constructing the Website
    prompts: {
      construction: [
        "Build a calorie tracker website where the user uploads a photo of food and sees the estimated calories.",
        "Add a daily calorie goal and a progress bar showing intake against the goal.",
        "Make the layout responsive for mobile with a clean fitness-themed colour palette.",
        "Prepare the project for deployment on Vercel and fix any build errors.",
      ],
      runtimeGemini:
        "Identify the food items in this image. For each item, estimate the serving size, calories, protein, carbohydrates and fat. Respond only in JSON.",
      sampleJsonResponse: `[
  {
    "item": "Grilled Chicken Breast",
    "serving_size": "150g",
    "calories": 247,
    "protein_g": 46.5,
    "carbohydrates_g": 0.0,
    "fat_g": 5.4
  },
  {
    "item": "Steamed Brown Rice",
    "serving_size": "1 cup (195g)",
    "calories": 218,
    "protein_g": 4.5,
    "carbohydrates_g": 45.8,
    "fat_g": 1.6
  },
  {
    "item": "Roasted Broccoli & Carrots",
    "serving_size": "100g",
    "calories": 55,
    "protein_g": 2.8,
    "carbohydrates_g": 8.2,
    "fat_g": 1.8
  }
]`,
    },

    // 8. API Integration
    apiIntegration: [
      {
        parameter: "API",
        detail: "Google Gemini API (Vision / Multimodal)",
      },
      {
        parameter: "Purpose",
        detail: "Recognise food items in an uploaded photo and estimate calories and macronutrients.",
      },
      {
        parameter: "Request",
        detail: "HTTPS POST call containing the base64-encoded image and strict structured text prompt.",
      },
      {
        parameter: "Response",
        detail: "Strict JSON array with food name, serving size, calories (kcal), protein (g), carbs (g), and fat (g).",
      },
      {
        parameter: "Security",
        detail: "API key securely stored in server-side environment variables on Vercel; never exposed in client source code.",
      },
      {
        parameter: "Error Handling",
        detail: "Gracefully handles network dropouts, unclear/blurry images, non-food uploads, and malformed JSON with fallback prompts and manual entry overrides.",
      },
    ],

    // 9. Users, Inputs and Outputs
    usersInputsOutputs: {
      targetUsers: "Students, gym-goers, athletes, fitness enthusiasts, and anyone looking to track daily food intake and manage weight effortlessly without manual logging friction.",
      table: [
        {
          stage: "Inputs",
          details: "Food photo (meal image), optional portion or meal note, customizable daily calorie goal.",
          format: "JPG / PNG image format; text and numeric fields.",
        },
        {
          stage: "Processing",
          details: "Image payload dispatched to Gemini Vision; structured JSON response parsed; daily intake totals and macro splits calculated.",
          format: "REST HTTPS API call, JSON parsing, Python / JavaScript calculation logic.",
        },
        {
          stage: "Outputs",
          details: "Detected food items, calories, protein, carbs, fat per item, cumulative daily total, and dynamic remaining calorie balance.",
          format: "On-screen card elements, animated numeric counters, and responsive visual progress bars.",
        },
      ],
    },

    // 10. References
    references: [
      {
        name: "CalTracker Deployment",
        url: "https://caltracker-fit.vercel.app/",
        notes: "Live web application on Vercel cloud",
      },
      {
        name: "Google Gemini API Documentation",
        url: "https://ai.google.dev/gemini-api/docs",
        notes: "Multimodal vision endpoints and structured JSON prompting specifications",
      },
      {
        name: "LeetCode Algorithmic Archive",
        url: "https://leetcode.com/problems/single-number/description/",
        notes: "Single Number (#136) and associated problem matrix (Part A, Item 9)",
      },
      {
        name: "Vercel Platform Documentation",
        url: "https://vercel.com/docs",
        notes: "Frontend deployment, edge functions, and environment variable configuration",
      },
      {
        name: "pandas Documentation",
        url: "https://pandas.pydata.org/docs/",
        notes: "DataFrame structures, ranking methods, and tabular data science APIs",
      },
      {
        name: "Medium Publication",
        url: "https://medium.com/@leoshiji/my-first-encounter-with-python-022495d85126",
        notes: "Editorial article: My First Encounter with Python by Leo Shiji",
      },
    ],
  },
};

export const GREEN_VIEW_INDEX_DATA = {
  title: "Green View Index (GVI) Ranking of 30 Global Cities",
  description: "A pandas DataFrame data analysis exercise ranking 30 international cities by their Green View Index (GVI). GVI quantifies urban green canopy coverage visible from street perspective, analyzed using Python's pandas library.",
  codeSnippet: `import pandas as pd

data = {
    "rank": list(range(1, 31)),
    "city": [
        "Tampa", "Breda", "Singapore", "Oslo", "Sydney",
        "Vancouver", "Montreal", "Cambridge", "Xalapa", "Durban",
        "Johannesburg", "Sacramento", "Frankfurt", "Geneva", "Veracruz",
        "Amsterdam", "Seattle", "Toronto", "Miami", "Boston",
        "Tel Aviv", "Guadalajara", "León", "Turin", "Los Angeles",
        "Buenos Aires", "Franca", "New York", "Cape Town", "London"
    ],
    "country": [
        "USA", "NLD", "SGP", "NOR", "AUS",
        "CAN", "CAN", "USA", "MEX", "ZAF",
        "ZAF", "USA", "DEU", "CHE", "MEX",
        "NLD", "USA", "CAN", "USA", "USA",
        "ISR", "MEX", "MEX", "ITA", "USA",
        "ARG", "BRA", "USA", "ZAF", "GBR"
    ],
    "gvi": [
        36.1, 29.3, 29.3, 28.8, 25.9,
        25.9, 25.5, 25.3, 24.0, 23.7,
        23.6, 23.6, 21.5, 21.4, 21.4,
        20.6, 20.0, 19.5, 19.4, 18.2,
        17.5, 17.3, 16.5, 16.2, 15.2,
        14.5, 13.7, 13.5, 13.4, 12.7
    ]
}

df = pd.DataFrame(data)  # 30 cities ranked by Green View Index (GVI)
print(df.describe())`,
  cities: [
    { rank: 1, city: "Tampa", country: "USA", gvi: 36.1 },
    { rank: 2, city: "Breda", country: "NLD", gvi: 29.3 },
    { rank: 3, city: "Singapore", country: "SGP", gvi: 29.3 },
    { rank: 4, city: "Oslo", country: "NOR", gvi: 28.8 },
    { rank: 5, city: "Sydney", country: "AUS", gvi: 25.9 },
    { rank: 6, city: "Vancouver", country: "CAN", gvi: 25.9 },
    { rank: 7, city: "Montreal", country: "CAN", gvi: 25.5 },
    { rank: 8, city: "Cambridge", country: "USA", gvi: 25.3 },
    { rank: 9, city: "Xalapa", country: "MEX", gvi: 24.0 },
    { rank: 10, city: "Durban", country: "ZAF", gvi: 23.7 },
    { rank: 11, city: "Johannesburg", country: "ZAF", gvi: 23.6 },
    { rank: 12, city: "Sacramento", country: "USA", gvi: 23.6 },
    { rank: 13, city: "Frankfurt", country: "DEU", gvi: 21.5 },
    { rank: 14, city: "Geneva", country: "CHE", gvi: 21.4 },
    { rank: 15, city: "Veracruz", country: "MEX", gvi: 21.4 },
    { rank: 16, city: "Amsterdam", country: "NLD", gvi: 20.6 },
    { rank: 17, city: "Seattle", country: "USA", gvi: 20.0 },
    { rank: 18, city: "Toronto", country: "CAN", gvi: 19.5 },
    { rank: 19, city: "Miami", country: "USA", gvi: 19.4 },
    { rank: 20, city: "Boston", country: "USA", gvi: 18.2 },
    { rank: 21, city: "Tel Aviv", country: "ISR", gvi: 17.5 },
    { rank: 22, city: "Guadalajara", country: "MEX", gvi: 17.3 },
    { rank: 23, city: "León", country: "MEX", gvi: 16.5 },
    { rank: 24, city: "Turin", country: "ITA", gvi: 16.2 },
    { rank: 25, city: "Los Angeles", country: "USA", gvi: 15.2 },
    { rank: 26, city: "Buenos Aires", country: "ARG", gvi: 14.5 },
    { rank: 27, city: "Franca", country: "BRA", gvi: 13.7 },
    { rank: 28, city: "New York", country: "USA", gvi: 13.5 },
    { rank: 29, city: "Cape Town", country: "ZAF", gvi: 13.4 },
    { rank: 30, city: "London", country: "GBR", gvi: 12.7 },
  ],
};

export const IOT_IMPAIRMENT_DATA = {
  title: "IoT-Based Application for Impairment Assessment",
  studentName: "Leo Shiji",
  regNo: "23MIC0082",
  impairment: "Eating Disorder",
  flowchartImage: "/images/figure1-iot-flowchart.png",
  sketchImage: "/images/figure2-original-sketch.jpg",
  summary:
    "A wrist-worn MPU sensor detects hand-to-mouth eating motion patterns. The ESP32 microcontroller classifies them: if an eating-disorder pattern is found, the system gives suggestions; otherwise it reports no issues. In both cases the data is sent to the cloud for further processing.",
  steps: [
    {
      title: "Hand Movement Capture",
      sensor: "Wearable Wrist MPU Sensor",
      desc: "Captures 6-DOF kinetic data (3-axis acceleration and angular rate) during eating activities.",
    },
    {
      title: "Eating Pattern Detection",
      sensor: "MPU Sensor Logic",
      desc: "Distinguishes hand-to-mouth trajectories from other habitual wrist motions.",
    },
    {
      title: "Edge Microcontroller Processing",
      sensor: "ESP32 Microcontroller",
      desc: "Applies pattern matching algorithms to detect abnormal frequency, binge cycles, or rapid ingestion.",
    },
    {
      title: "Classification & Feedback",
      sensor: "Disorder Decision Engine",
      desc: "If eating disorder pattern detected: System gives real-time suggestions and intervention alerts. If not: reports normal status.",
    },
    {
      title: "Cloud Telemetry",
      sensor: "Cloud Data Pipeline",
      desc: "In both cases, encrypted biometric telemetry is dispatched to cloud storage for retrospective healthcare analysis.",
    },
  ],
};

export const ACADEMIC_ACTIVITIES_DATA = {
  tutorial: {
    title: "Python Tutorial Discussion",
    image: "/images/python-tutorial-discussion.jpg",
    caption: "Python tutorial discussion",
    description:
      "Group discussion during the Python tutorial session in the computer lab, where we worked through complex problems, evaluated differing data structure choices, and compared algorithmic approaches collaboratively.",
  },
  quiz: {
    title: "In-Class Python Quiz",
    image: "/images/class-quiz.jpg",
    caption: "Class quiz session",
    description:
      "Students during the in-class quiz session. The timed assessment evaluated foundational and advanced Python concepts including OOP, functional programming, memory management, and data handling libraries covered in the CS13007 course.",
  },
  audioRecording: {
    title: "Audio Recording Session [Business Thesis]",
    fileName: "New recording 12.mp3",
    image: "/images/audio-recording-session.jpg",
    caption: "Audio recording session in computer lab",
    link: "https://drive.google.com/file/d/1qrQ_rvdgNQQB2ehmpCnlmdywI27ewF6U/view",
    description:
      "Audio recording session carried out in the computer lab for the CalTracker website and its comprehensive business thesis (New recording 12.mp3), focusing on consumer nutrition friction, AI-driven market viability, and scalable cloud monetization.",
  },
};

export const PADLET_LEETCODE_DATA = {
  title: "Padlet Submission & LeetCode Algorithmic Matrix",
  submissionTag: "Padlet_Python_23MIC0082",
  student: "Leo Shiji",
  regNo: "23MIC0082",
  screenshot: "/images/padlet-submission.jpg",
  caption: "Padlet post with PDF and problem list",
  summary:
    "Official Padlet submission: Padlet_Python_23MIC0082 by Leo Shiji (Reg_No: 23MIC0082). Covers six algorithm challenges categorized across Easy, Medium, and Hard tiers with complete problem solutions, Big-O complexities, and algorithmic insights.",
  problems: [
    {
      id: "easy-1",
      tier: "Easy",
      name: "Single Number",
      number: 136,
      url: "https://leetcode.com/problems/single-number/description/",
      technique: "Bitwise XOR Operator",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      description:
        "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.",
      code: `class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        xor_sum = 0
        for num in nums:
            xor_sum ^= num  # a ^ a = 0; a ^ 0 = a
        return xor_sum`,
    },
    {
      id: "easy-2",
      tier: "Easy",
      name: "Plus One",
      number: 66,
      url: "https://leetcode.com/problems/plus-one/description/",
      technique: "Array Traversal & Carry Ripple",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      description:
        "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. Increment the large integer by one and return the resulting array of digits.",
      code: `class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        for i in range(len(digits) - 1, -1, -1):
            if digits[i] < 9:
                digits[i] += 1
                return digits
            digits[i] = 0
        return [1] + digits`,
    },
    {
      id: "medium-1",
      tier: "Medium",
      name: "Rotate List",
      number: 61,
      url: "https://leetcode.com/problems/rotate-list/description/",
      technique: "Linked List Ring & Modulo Shift",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      description:
        "Given the head of a linked list, rotate the list to the right by k places. Handle cases where k exceeds list length via modulo arithmetic.",
      code: `class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next or k == 0:
            return head
        
        # Compute length and link tail to head
        length = 1
        tail = head
        while tail.next:
            tail = tail.next
            length += 1
        
        k = k % length
        if k == 0:
            return head
            
        tail.next = head  # make circle
        steps_to_new_tail = length - k
        new_tail = head
        for _ in range(steps_to_new_tail - 1):
            new_tail = new_tail.next
            
        new_head = new_tail.next
        new_tail.next = None
        return new_head`,
    },
    {
      id: "medium-2",
      tier: "Medium",
      name: "Search a 2D Matrix",
      number: 74,
      url: "https://leetcode.com/problems/search-a-2d-matrix/description/",
      technique: "Binary Search on Flattened 2D Index Space",
      timeComplexity: "O(log(m * n))",
      spaceComplexity: "O(1)",
      description:
        "You are given an m x n integer matrix with sorted rows and first-integer column sorting. Write an efficient algorithm to search for a target value in logarithmic time.",
      code: `class Solution:
    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:
        if not matrix or not matrix[0]:
            return False
        m, n = len(matrix), len(matrix[0])
        low, high = 0, m * n - 1
        
        while low <= high:
            mid = (low + high) // 2
            val = matrix[mid // n][mid % n]
            if val == target:
                return True
            elif val < target:
                low = mid + 1
            else:
                high = mid - 1
        return False`,
    },
    {
      id: "hard-1",
      tier: "Hard",
      name: "Distinct Subsequences",
      number: 115,
      url: "https://leetcode.com/problems/distinct-subsequences/description/",
      technique: "2D Dynamic Programming (Rolling Array)",
      timeComplexity: "O(m * n)",
      spaceComplexity: "O(n)",
      description:
        "Given two strings s and t, return the number of distinct subsequences of s which equals t. Optimized using dynamic programming recurrence relation.",
      code: `class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        m, n = len(s), len(t)
        # dp[j] stores number of distinct subsequences of s[:i] equal to t[:j]
        dp = [0] * (n + 1)
        dp[0] = 1
        
        for char_s in s:
            for j in range(n - 1, -1, -1):
                if char_s == t[j]:
                    dp[j + 1] += dp[j]
        return dp[n]`,
    },
    {
      id: "hard-2",
      tier: "Hard",
      name: "Remove Boxes",
      number: 546,
      url: "https://leetcode.com/problems/remove-boxes/description/",
      technique: "3D Dynamic Programming with Memoization",
      timeComplexity: "O(n^4)",
      spaceComplexity: "O(n^3)",
      description:
        "Given several boxes with different colors represented by positive integers, you may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color, remove them and get k*k points. Find maximum points.",
      code: `class Solution:
    def removeBoxes(self, boxes: list[int]) -> int:
        memo = {}
        
        def dp(l, r, k):
            if l > r:
                return 0
            # Compress same consecutive colors on the right
            while r > l and boxes[r] == boxes[r - 1]:
                r -= 1
                k += 1
                
            state = (l, r, k)
            if state in memo:
                return memo[state]
                
            # Option 1: remove boxes[r] along with the k trailing identical boxes
            res = dp(l, r - 1, 0) + (k + 1) ** 2
            
            # Option 2: search for matching color in boxes[l..r-1]
            for i in range(l, r):
                if boxes[i] == boxes[r]:
                    res = max(res, dp(l, i, k + 1) + dp(i + 1, r - 1, 0))
                    
            memo[state] = res
            return res
            
        return dp(0, len(boxes) - 1, 0)`,
    },
  ],
};

export const MEDIUM_ARTICLE_DATA = {
  title: "My First Encounter with Python",
  subtitle: "It’s been 4 years i have been studying…",
  author: "Leo Shiji",
  date: "Nov, 2026",
  platform: "Medium",
  url: "https://medium.com/@leoshiji/my-first-encounter-with-python-022495d85126",
  readTime: "4 min read",
  quote:
    "It’s been 4 years i have been studying... from learning basic variables and loops to architecting production web systems and exploring multimodal vision algorithms.",
  takeaways: [
    "From Basic Loops to Real-World Impact: How early syntax exercises paved the way for building full-stack AI applications like CalTracker.",
    "The Elegance of Pythonic Design: Why readable code, high-level abstractions, and the Python ecosystem remain unparalleled for rapid prototyping.",
    "Bridging Data Science & Deep Learning: Combining pandas, PyTorch, and cloud multimodal APIs to solve everyday problems like automated nutritional tracking.",
  ],
};
