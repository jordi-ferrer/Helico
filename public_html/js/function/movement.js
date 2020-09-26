/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function movebloc(rect, i)
{
    rect.x = rect.x + rect.vx;
    if(rect.x < -rect.width)
    {   
        rect.inc_index();
        rect.x = 1100;
        //var difficulty = sco/100;
        //if(difficulty > 150) difficulty = 150;
        rect.y = bloc[ (i+bloc.length-1)%bloc.length ].y + Math.floor(Math.random()*150 - 75);
        if(rect.y < 300) rect.y = 300;
        if(rect.y > 450) rect.y = 450;
        if(i===5 && rescatat)
        {
            rescatat = false;
            document.getElementById("human1").style.visibility="visible";
        }
    }
}

function volare(id) {
    if(mou && !xocat) { 
        heli.vy = heli.vy - 6;
        heli.y += heli.vy;
        corda.y = heli.y + heli.height;
    }
}

