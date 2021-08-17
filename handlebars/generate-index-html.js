const { join } = require('path');
const { readFileSync, writeFileSync } = require('fs');
const Handlebars = require('handlebars');

const userName = 'Igor';

const pwd = process.cwd();

const dataPassedToHbs = { userName };

const createIndexHtmlFileData = templateData => {
    const templateFile = readFileSync(join(pwd, './index.html.hbs'), { encoding: 'utf-8' });
    const compiledTemplate = Handlebars.compile(templateFile);

    return compiledTemplate(templateData);
};

const indexHtmlFile = createIndexHtmlFileData(dataPassedToHbs);

const generateFinalHtmlFile = (updatedIndexHtmlFile) => {
    const indexTargetPath = join(pwd, './index.html');
    writeFileSync(indexTargetPath, updatedIndexHtmlFile);
};

generateFinalHtmlFile(indexHtmlFile);
