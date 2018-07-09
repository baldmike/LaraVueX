<template>
    <div class="container">
        <div class="col-md-2" style="text-align: center;">
            <table class="table">
                <tbody>
                    <tr>
                        <td @click="increaseHour()"><i class="material-icons" style="font-size: 3em">add_circle</i></td>
                        <td @click="increaseMinute()"><i class="material-icons" style="font-size: 3em">add_circle</i></td>
                        <td @click="amPm()"><i class="material-icons" style="font-size: 3em">add_circle</i></td>
                    </tr>
                    <tr>
                        <td>{{ time.hour }}</td>
                        <td>{{ time.minute }}</td>
                        <td>{{ time.ap }}</td>
                    </tr>
                    <tr>
                        <td @click="decreaseHour()"><i class="material-icons" style="font-size: 3em">remove_circle</i></td>
                        <td @click="decreaseMinute()"><i class="material-icons" style="font-size: 3em">remove_circle</i></td>
                        <td @click="amPm()"><i class="material-icons" style="font-size: 3em">remove_circle</i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "pagex",
        data() {
            return {
                time: {
                    hour: 4,
                    minute: 20,
                    ap: 'PM'
                }
            }
        },
        methods: {
            increaseHour: function(){
                if(this.time.hour==11){
                    this.amPm();
                }
                if(this.time.hour==12){
                    this.time.hour=+ 1;
                } else {
                    this.time.hour+=1;
                } return this.time.hour;
            },
            decreaseHour: function(){
                if(this.time.hour==1){
                    this.time.hour=12;
                    this.amPm();
                } else {
                    this.time.hour-=1;
                } return this.time.hour;
            },
            increaseMinute: function(){
                if(this.time.minute==55){
                    this.time.minute=("0" + "0").slice(-2);
                    this.increaseHour();
                } else if(this.time.hour==12){
                    this.time.hour=1;
                } else if(this.time.minute=="00") {
                    this.time.minute=("0" + "5").slice(-2);
                } else if(this.time.minute=="05") {
                    this.time.minute=10;
                } else {
                    this.time.minute+=5;
                } return this.time.minute;
            },
            decreaseMinute: function(){
                if(this.time.minute=="00"){
                    this.time.minute=55;
                    this.decreaseHour();
                } else if (this.time.minute=="05") {
                    this.time.minute=("0" + "0").slice(-2);
                } else if (this.time.minute=="10") {
                    this.time.minute=("0" + "5").slice(-2);
                } else {
                    this.time.minute-=5;
                } return this.time.minute;
            },
            amPm: function(){
                if(this.time.ap=="PM"){
                    this.time.ap = "AM";
                } else {
                    this.time.ap = "PM";
                } return this.time.ap;
            },
        }
    }
</script>
