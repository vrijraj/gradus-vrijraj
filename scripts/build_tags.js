import * as fs from "fs";
import * as path from "path";
import { parseMarkdown } from "@nuxtjs/mdc/runtime";

const DIR_FOR_CONTENTS = "./content/";

const run = async () => {
    const tagSet = new Set();
    const files = [];
    fs.readdirSync(DIR_FOR_CONTENTS)
        .filter((file) => {
            return (
                file.indexOf(".") !== 0 &&
                file.slice(-3) === ".md"
            );
        })
        .forEach((file) => {
            files.push(path.join(DIR_FOR_CONTENTS, file));
        });

    for await (const file of files) {
        const data = fs.readFileSync(file, "utf8");
        const a = await parseMarkdown(data);
        if (a.data.tags != undefined) {
            a.data.tags.forEach((tag) => tagSet.add(tag));
        }
    }

    const tags = [...tagSet];

    console.log("Tags to be used", tags);
    fs.writeFileSync(
        "./assets/topic_filter.json",
        JSON.stringify(tags),
        "utf8"
    );
};

export default run;
