// Servo Channel.
enum ServoChannelArm {
    S1 = REG_ADD_SERVO_1,
    S2 = REG_ADD_SERVO_2,
    S3 = REG_ADD_SERVO_3,
    S4 = REG_ADD_SERVO_4
};

//% color = #f705e3
namespace roboArm
{
    //% block="set servo %servo for base position to %position degrees"
    //% position.min=-90 position.max=90
    export function turnBase(servo: ServoChannelArm, position: number):void
    {
        position = rekabit.limit(position, -90, 90);
        let pulseWidth = position * 20 / 18 + 50
        rekabit.i2cWrite(servo, pulseWidth);
    }

    //% block="set all servos to home"
    export function setToHomePosition():void{
        let pulseWidth =  50
        rekabit.i2cWrite(ServoChannelArm.S1, pulseWidth);
        rekabit.i2cWrite(ServoChannelArm.S2, pulseWidth);
        rekabit.i2cWrite(ServoChannelArm.S3, pulseWidth);
        rekabit.i2cWrite(ServoChannelArm.S4, pulseWidth);
    }
}
