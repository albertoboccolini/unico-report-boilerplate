This is a simple NextJS boilerplate to render some charts using [UNICO](https://theunico.it) API and [recharts](https://recharts.org/en-US/).

## Getting Started

- Clone this repository

```bash
git clone https://github.com/albertoboccolini/unico-report-boilerplate
```

- Create a `.env` file and add `NEXT_PUBLIC_UNICO_API_KEY=[YOUR_UNICO_API_KEY]`
- In `/app/reports/page.tsx` substitute [YOUR_AGENT_NAME] with your UNICO agent name (Make sure the responses match recharts data format).

- Run the development server:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser and click the buttons to generate some charts.
