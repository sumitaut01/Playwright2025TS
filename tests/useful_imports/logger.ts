import chalk from "chalk"

type Level = "INFO" | "WARN" | "ERROR"

export async function log(level: Level, message: string) {
    console.log(chalk.blue(`[${level}] ${message}`));

    switch (level) {
        case "INFO":
            console.log(chalk.green("This is an info message."));
            break;
        case "WARN":
            console.log(chalk.yellow("This is a warning message."));
            break;
        case "ERROR":
            console.log(chalk.red("This is an error message."));
            break;
    }

}

log("INFO", "This is an informational message.");
log("WARN", "This is a warning message.");
log("ERROR", "This is an error message.");


// PS D:\SeleniumFrameWorks\GitHubSumitraut01\Playright2025TS> tsx d:\SeleniumFrameWorks\GitHubSumitraut01\Playright2025TS\tests\useful_imports\logger.ts
// [INFO] This is an informational message.
// This is an info message.
// [WARN] This is a warning message.
// This is a warning message.
// [ERROR] This is an error message.
// This is an error message.
