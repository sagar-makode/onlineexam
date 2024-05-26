// validation.js
export const ValidateTestCreateForm = (testName, category, customCategory, minutes, outOfMarks, questions) => {
    const errors = [];

    // Validate test name
    if (!testName.trim()) {
        errors.push({ field: 'testName', message: 'Please enter the test name.' });
    }

    // Validate category
    if (!category) {
        errors.push({ field: 'category', message: 'Please select a category.' });
    }

    // Validate custom category if 'other' is selected
    if (category === 'other' && !customCategory.trim()) {
        errors.push({ field: 'customCategory', message: 'Please enter your custom category.' });
    }

    // Validate minutes
    if (!minutes.trim() || !/^\d+$/.test(minutes) || parseInt(minutes) <= 0) {
        errors.push({ field: 'minutes', message: 'Please enter a valid duration in minutes.' });
    }

    // Validate total marks
    if (!outOfMarks.trim() || !/^\d+$/.test(outOfMarks) || parseInt(outOfMarks) <= 0) {
        errors.push({ field: 'outOfMarks', message: 'Please enter valid total marks.' });
    }

    // Validate questions
    questions.forEach((question, index) => {
        if (!question.question.trim()) {
            errors.push({ field: `question${index}`, message: `Please enter the text for question ${index + 1}.` });
        }
        question.options.forEach((option, optionIndex) => {
            if (!option.trim()) {
                errors.push({ field: `option${index}-${optionIndex}`, message: `Please enter option ${optionIndex + 1}.` });
            }
        });
        if (!question.correctOption) {
            errors.push({ field: `correctOption${index}`, message: `Please select the correct option for question ${index + 1}.` });
        }
    });

    return errors;
};
