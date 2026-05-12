/* twine-user-script #13: "templates.js" */
Template.add('he',function (p=getPlayer()) {
    return (p.pronouns === 'masculine') ? 'he' : 'she';
})

Template.add('cock', function () {
    return (hasPenis() === true) ? 'cock' : 'strap-on';
})
Template.add('hard', function () {
    if (isChastity()) {
        return 'caged'
    } else {
        return (hasPenis() === true) ? 'hard' : 'wet';
    }
})
Template.add(['get-hard','get-wet'], function () {
    if (isChastity()) {
        return 'strain under your <<accf>>'
    } else {
        return (hasPenis() === true) ? 'get hard' : 'get wet';
    }
})
Template.add('unusable-cock', function () {
    if (isChastity() || isSissy()) {
        if (isChastity()) {
            return (isSissy()) ? 'tiny, imprisoned sissy dick' : 'imprisoned cock';
        } else {
            return 'flaccid sissy dick';
        }
    };

    return 'cock';
})
Template.add(['genitals','genitals-size'], function () {
    if (isChastity() || isSissy()) {
        if (isChastity()) {
            return (isSissy()) ? 'tiny, imprisoned sissy dick' : 'imprisoned cock';
        } else {
            return 'flaccid sissy dick';
        }
    };

    if (this.name === 'genitals-size') {
        return (hasPenis() === true) ? '<<pSize>>' : '<<vSize>>';
    } else {
        return (hasPenis() === true) ? 'cock' : 'pussy';
    }
})

Template.add(['sister','Sister'], function (s=variables().sister) {
    if (this.name === 'sister') {
        return (s.isBlood === true) ? 'sister' : 'stepsister';
    } else {
        return (s.isBlood === true) ? 'Sister' : 'Stepsister';
    }
});
Template.add(['siblings','Siblings'], function (s=variables().sister) {
    if (this.name === 'siblings') {
        return (s.isBlood === true) ? 'siblings' : 'stepsiblings';
    } else {
        return (s.isBlood === true) ? 'Siblings' : 'Stepsiblings';
    }
});
Template.add(['daughter','Daughter'], function (s=variables().sister) {
    if (this.name === 'daughter') {
        return (s.isBlood === true) ? 'daughter' : 'stepdaughter';
    } else {
        return (s.isBlood === true) ? 'Daughter' : 'Stepdaughter';
    }
});

Template.add(['mother','Mother'], function (s=variables().mom) {
    if (this.name === 'mother') {
        return (s.isBlood === true) ? 'mother' : 'stepmother';
    } else {
        return (s.isBlood === true) ? 'Mother' : 'Stepmother';
    }
});
Template.add(['mom','Mom'], function (s=variables().mom) {
    if (this.name === 'mom') {
        return (s.isBlood === true) ? 'mom' : 'stepmom';
    } else {
        return (s.isBlood === true) ? 'Mom' : 'Stepmom';
    }
});

Template.add(['husband','Husband'], function () {
    if (this.name === 'husband') {
        return (isMale()) ? 'husband' : 'wife';
    } else {
        return (isMale()) ? 'Husband' : 'Wife';
    }
});
Template.add(['hubby','Hubby'], function () {
    if (this.name === 'hubby') {
        return (isMale()) ? 'hubby' : 'wifey';
    } else {
        return (isMale()) ? 'Hubby' : 'Wifey';
    }
});

Template.add('mc',function (p=getPlayer()) {
    if (variables().speaker !== undefined) {
        var speaker = variables().speaker;
        if (speaker.id == "sophie") {
            return variables().player.sophieName;
        } else if (speaker.playerName) {
            return speaker.playerName;
        };
    };

    return p.name;
});

Template.add('saya',function() {
    return variables().saya.name;
});
Template.add('sophie',function() {
    return variables().sophie.name;
});
Template.add('ava',function() {
    return variables().mom.realName;
});
Template.add('dakota',function() {
    return variables().sister.name;
});
Template.add('diana',function() {
    return variables().diana.name;
});
Template.add('tasha',function() {
    return variables().tasha.name;
});
Template.add('john',function() {
    return variables().john.name;
});
Template.add('julia',function() {
    return variables().julia.name;
});
Template.add('penny',function() {
    return variables().penny.name;
});
Template.add('kagney',function() {
    return variables().kagney.name;
});
Template.add('elsa',function() {
    return variables().elsa.name;
});
Template.add('craig',function() {
    return variables().craig.name;
});
Template.add('veruca',function() {
    return variables().veruca.name;
});
Template.add('ash',function() {
    return variables().ash.name;
});
Template.add('lexi',function() {
    return variables().lexi.name;
});
Template.add('siri',function() {
    return variables().siri.name;
});

Template.add('jhis',function() {
    return (variables().john.isMale === true) ? 'his' : 'her';
});
Template.add('jhe',function() {
    return (variables().john.isMale === true) ? 'he' : 'she';
});
Template.add('jHe',function() {
    return (variables().john.isMale === true) ? 'He' : 'She';
});