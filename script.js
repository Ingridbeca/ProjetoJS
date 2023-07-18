function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    if (hora >= 23 && minuto >= 0  || hora <= 6 && minuto <= 59){
        refeicao.innerHTML = 'Nenhuma refeição! (Horário de sono)'
        emoji.innerHTML = '\uD83D\uDCA4'
        document.body.style.backgroundImage = "url('img/madrugada.jpg')"
    }else if (hora >= 21 && minuto >= 0){
        refeicao.innerHTML = 'É indicado esperar 2hrs antes de dormir após se alimentar'
        emoji.innerHTML = '\u23F0'
        document.body.style.backgroundImage = "url('img/pausa.jpg')"
    }else if(hora >= 18 && minuto >= 0){
        refeicao.innerHTML = 'Jantar!'
        emoji.innerHTML = '\uD83C\uDF5D\uD83C\uDF74\uD83C\uDF77'
        document.body.style.backgroundImage = "url('img/jantar.jpg')"
    }else if (hora >= 17 && minuto >= 0){
        refeicao.innerHTML = '(À espera do jantar!)'
        emoji.innerHTML = '\u23F0'
        document.body.style.backgroundImage = "url('img/pausa.jpg')"
    }else if(hora >= 15 && minuto >= 0){
        refeicao.innerHTML = 'Lanche!'
        emoji.innerHTML = '\uD83E\uDD6A\uD83C\uDF74\uD83E\uDDC3'
        document.body.style.backgroundImage = "url('img/lanche.jpg')"
    }else if (hora >= 14 && minuto >= 0){
        refeicao.innerHTML = '(À espera do lanche!)'
        emoji.innerHTML = '\u23F0'
        document.body.style.backgroundImage = "url('img/pausa.jpg')"
    }else if (hora >= 12 && minuto >= 0){
        refeicao.innerHTML = 'Almoço!'
        emoji.innerHTML = '\uD83C\uDF73\uD83C\uDF74\uD83C\uDF71'
        document.body.style.backgroundImage = "url('img/almoço.jpg')"
    }else if (hora >= 10 && minuto >= 0){
        refeicao.innerHTML = '(À espera do almoço!)'
        emoji.innerHTML = '\u23F0'
        document.body.style.backgroundImage = "url('img/pausa.jpg')"
    }else if(hora >= 7 && minuto >= 0){
        refeicao.innerHTML = 'Café da manhã!'
        emoji.innerHTML = ` \uD83E\uDD5E\uD83C\uDF74\u2615`
        document.body.style.backgroundImage = "url('img/cafedamanha.jpg')"
    }if (minuto < 10) {
        msg.innerHTML = `São ${hora} horas e 0${minuto} minutos`
    }else if(minuto > 10){
        msg.innerHTML = `São ${hora} horas e ${minuto} minutos`
    }else if(hora == 1 && minuto == 1){
        msg.innerHTML = `É ${hora} hora e 0${minuto} minuto`
    }else if(minuto == 1){
        msg.innerHTML = `São ${hora} horas e 0${minuto} minuto`
    }else if(hora == 1){
        msg.innerHTML = `É ${hora} hora e ${minuto} minutos`
    }
}

