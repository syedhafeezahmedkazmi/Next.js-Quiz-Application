"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const questions = [
  {
    question: "1. What is Next.js primarily used for?",
    options: [
      "a) Static site generation",
      "b) Server-side rendering",
      "c) Full-stack development",
      "d) All of the above",
    ],
    answer: "d) All of the above",
  },
  {
    question: "2. What is the default routing mechanism in Next.js?",
    options: [
      "a) File-based routing",
      "b) URL-based routing",
      "c) Class-based routing",
      "d) Component-based routing",
    ],
    answer: "a) File-based routing",
  },
  {
    question: "3. Which command is used to create a new Next.js project?",
    options: [
      "a) next create my-app",
      "b) npx create-next-app",
      "c) npm install next",
      "d) next init",
    ],
    answer: "b) npx create-next-app",
  },
  {
    question: "4. What function is used to fetch data before rendering a page?",
    options: [
      "a) useEffect()",
      "b) getServerSideProps()",
      "c) getStaticProps()",
      "d) useState()",
    ],
    answer: "b) getServerSideProps()",
  },
  {
    question: "5. What is the main purpose of getStaticProps()?",
    options: [
      "a) To fetch data at runtime",
      "b) To generate static content at build time",
      "c) To handle form data",
      "d) To manage state within components",
    ],
    answer: "b) To generate static content at build time",
  },
  {
    question: "6. Which is NOT a feature of Next.js?",
    options: [
      "a) SSR (Server-Side Rendering)",
      "b) SSG (Static Site Generation)",
      "c) Full page reload on navigation",
      "d) API routes",
    ],
    answer: "c) Full page reload on navigation",
  },
  {
    question: "7. In Next.js, which file is used to define custom routes?",
    options: [
      "a) pages.js",
      "b) routes.js",
      "c) app.js",
      "d) pages/ directory",
    ],
    answer: "d) pages/ directory",
  },
  {
    question: "8. What does getStaticPaths() do in Next.js?",
    options: [
      "a) Pre-renders a page with dynamic routes",
      "b) Fetches data from an API",
      "c) Handles route redirection",
      "d) Adds custom headers to pages",
    ],
    answer: "a) Pre-renders a page with dynamic routes",
  },
  {
    question: "9. Which is the correct way to import CSS in Next.js?",
    options: [
      "a) import './style.css';",
      "b) import 'style.css';",
      "c) import '../styles/style.css';",
      "d) @import 'style.css';",
    ],
    answer: "c) import '../styles/style.css';",
  },
  {
    question: "10. What is used for API routes in Next.js?",
    options: ["a) .api()", "b) .apiRoute()", "c) pages/api/", "d) api/ directory"],
    answer: "c) pages/api/",
  },
  {
    question: "11. How can you implement client-side routing?",
    options: [
      "a) nextLink()",
      "b) Link component from 'next/link'",
      "c) useRouter() hook from 'next/router'",
      "d) Both b and c",
    ],
    answer: "d) Both b and c",
  },
  {
    question: "12. Which service is commonly used to deploy a Next.js app?",
    options: ["a) Netlify", "b) Vercel", "c) Heroku", "d) All of the above"],
    answer: "d) All of the above",
  },
  {
    question: "13. What is the main advantage of Server-Side Rendering (SSR)?",
    options: [
      "a) Faster initial load",
      "b) Improved SEO",
      "c) Reduced server load",
      "d) Static content generation",
    ],
    answer: "b) Improved SEO",
  },
  {
    question: "14. Which file is used for global CSS styles?",
    options: ["a) style.css", "b) _app.js", "c) _document.js", "d) global.css"],
    answer: "b) _app.js",
  },
  {
    question: "15. What is the default behavior of dynamic routes?",
    options: [
      "a) Generates static content by default",
      "b) Loads content on the server at runtime",
      "c) Uses JavaScript to generate content",
      "d) Relies on API calls to generate content",
    ],
    answer: "a) Generates static content by default",
  },
  {
    question: "16. Which of the following is used to optimize images in Next.js?",
    options: ["a) img tag", "b) <Image /> from 'next/image'", "c) SVGs only", "d) CDN images"],
    answer: "b) <Image /> from 'next/image'",
  },
  {
    question: "17. What command is used to start a Next.js development server?",
    options: ["a) next dev", "b) npm start", "c) node server.js", "d) next run"],
    answer: "a) next dev",
  },
  {
    question: "18. What is ISR (Incremental Static Regeneration) in Next.js?",
    options: [
      "a) A method to dynamically update static pages",
      "b) A way to improve CSS performance",
      "c) A technique for API calls",
      "d) A new React Hook",
    ],
    answer: "a) A method to dynamically update static pages",
  },
  {
    question: "19. How can you get query parameters in Next.js?",
    options: ["a) useQuery()", "b) useSearchParams()", "c) useRouter().query", "d) Both b and c"],
    answer: "d) Both b and c",
  },
  {
    question: "20. What is Middleware in Next.js used for?",
    options: [
      "a) Redirecting or rewriting requests",
      "b) Managing UI components",
      "c) Enhancing page styling",
      "d) Handling form validations",
    ],
    answer: "a) Redirecting or rewriting requests",
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {showResult ? (
          <Card>
            <h2 className="text-2xl font-bold text-center mb-4">Quiz Completed!</h2>
            <p className="text-lg text-center">Your Score: {score} / {questions.length}</p>
          </Card>
        ) : (
          <Card>
            <h2 className="text-xl font-semibold mb-4">
              {questions[currentQuestion].question}
            </h2>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  label={option}
                  onClick={() => handleAnswer(option)}
                  className={`w-full ${
                    selectedAnswer === option ? "bg-green-500" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <span className="text-gray-500">
                Question {currentQuestion + 1} / {questions.length}
              </span>
              <Button label="Next" onClick={handleNext} disabled={!selectedAnswer} />
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
