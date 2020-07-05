const Generator = require('yeoman-generator');
module.exports = class extends Generator {
    prompting () {
        return this.prompt([
            {
                type: 'input', // input 是输入
                name: 'name', // 字段名
                message: 'please input your project name:', // 提示消息
                default: 'vue' // 默认值
            }
        ]).then(answers => {
            this.answers = answers;
        })
    }
    writing () {
        // 把一个个文件通过模板转换目标路径
        const temps = [
            'package.json',
            'package-lock.json',
            'README.md',
            'README.en.md',
            'test.vue'
        ];
        temps.forEach(path => {
            this.fs.copyTpl(
                this.templatePath(path),
                this.destinationPath(path),
                this.answers
            )
        })
    }
}