function slugify(title) {
    const caseTitle = title.toLowerCase();
    const wordsArray = caseTitle.split(' ');
    const slugTitle = wordsArray.join('-');
    return slugTitle;
}