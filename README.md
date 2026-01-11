# HRBP AI Assistant Backend

## Project Approach

This backend service implements an **HRBP (Human Resources Business Partner) AI Assistant** that provides intelligent analysis and insights on employee data. The project follows a modular architecture:

### Architecture Overview

1. **Express.js API Server**: RESTful API endpoint (`/chat`) that accepts user queries
2. **LangChain Integration**: Uses OpenAI's GPT-4o-mini model for natural language processing
3. **Excel Data Processing**: Reads and processes employee data from Excel files using the `xlsx` library
4. **Agent-Based Design**: Implements an HRBP agent that combines:
   - System prompts defining the AI's role and behavior
   - Excel data context for informed responses
   - Structured response formatting for HR insights

### Key Components

- **Server** (`server.ts`): Express server with CORS enabled, listening on port 5500 (configurable)
- **Chat Route** (`routes/chat.route.ts`): POST endpoint that processes user messages
- **HRBP Graph** (`graph/hrbp.graph.ts`): Orchestrates the agent execution flow
- **HRBP Agent** (`agent/hrbp.agent.ts`): Core AI agent with system prompts and data context
- **Tools**:
  - `excel.tool.ts`: Reads Excel files from the data directory
  - `analytics.tool.ts`: Provides data access layer for the agent

### Features

- Natural language query processing for employee data
- Excel file parsing and data extraction
- AI-powered HR insights and analysis
- Structured markdown-formatted responses
- Error handling and validation

## Instructions to Run the Project

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)
- **OpenAI API Key** (required for AI functionality)

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   
   Create a `.env` file in the `backend` directory with the following:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=5500
   ```
   
   Replace `your_openai_api_key_here` with your actual OpenAI API key.

3. **Verify Data File**
   
   Ensure the Excel file exists at: `src/data/Banking Demo File.xlsx`
   
   The application will read employee data from this file.

### Running the Project

#### Development Mode (with hot reload)
```bash
npm run dev
```

This starts the server with TypeScript watch mode, automatically restarting on file changes.

#### Production Mode

1. **Build the project:**
   ```bash
   npm run build
   ```
   
   This compiles TypeScript to JavaScript and copies data files to the `dist` directory.

2. **Start the server:**
   ```bash
   npm start
   ```

### API Usage

Once the server is running, you can interact with the HRBP AI Assistant:

**Endpoint:** `POST http://localhost:5500/chat`

**Request Body:**
```json
{
  "message": "Show me all employees"
}
```

**Response:**
```json
{
  "reply": "Here are all employees from our records:\n\n[Formatted response with employee data]"
}
```

**Health Check:**
```bash
GET http://localhost:5500/
```

Returns: `"HRBP AI Server is running"`

### Example Queries

- "Who are you?"
- "Show me all employees"
- "What is the average salary?"
- "List employees in the Engineering department"
- "Hello"

### Troubleshooting

- **Port already in use**: Change the `PORT` value in `.env` or set it as an environment variable
- **Excel file not found**: Ensure `Banking Demo File.xlsx` exists in `src/data/`
- **OpenAI API errors**: Verify your API key is correct and has sufficient credits
- **TypeScript errors**: Run `npm run build` to check for compilation issues