// Servo Channel.
enum ServoChannelArm {
    S1 = REG_ADD_SERVO_1,
    S2 = REG_ADD_SERVO_2,
    S3 = REG_ADD_SERVO_3,
    S4 = REG_ADD_SERVO_4
};

namespace roboArm
{
    //% block="set servo %servo for base position to %position degrees"
    //% position.min=0 position.max=180
    export function turnBase(servo: ServoChannelArm, position: number):void
    {
        position = rekabit.limit(position, 0, 180);
        let pulseWidth = position * 20 / 18 + 50
        rekabit.i2cWrite(servo, pulseWidth);
    }

    //% block="set servo %servo for arm1 position to %position degrees"
    //% position.min=0 position.max=180
    export function arm1(servo: ServoChannelArm, position: number): void {
        position = rekabit.limit(position, 0, 180);
        let pulseWidth = position * 20 / 18 + 50
        rekabit.i2cWrite(servo, pulseWidth);
    }

    //% block="set servo %servo for arm2 position to %position degrees"
    //% position.min=0 position.max=180
    export function arm2(servo: ServoChannelArm, position: number): void {
        position = rekabit.limit(position, 0, 180);
        let pulseWidth = position * 20 / 18 + 50
        rekabit.i2cWrite(servo, pulseWidth);
    }

    //% block="set servo %servo for gripper position to %position degrees"
    //% position.min=0 position.max=90
    export function gripper(servo: ServoChannelArm, position: number): void {
        position = rekabit.limit(position, 0, 90);
        let pulseWidth = position * 20 / 18 + 50
        rekabit.i2cWrite(servo, pulseWidth);
    }


    //% block="increment servo: %servo by  %position degrees within %min and %max"
    export function incrementServoByDegrees(servo: ServoChannelArm, position: number, min:number,max:number): void {
        position = rekabit.limit(position, 0, 180)
        position = getCurrentPositionOfServo(servo)+position
        if(position>max)
        {
            position = max;
        }

        if(position<min)
        {
            position = min;
        }
        let pulseWidth = position * 20 / 18 + 50
        rekabit.i2cWrite(servo, pulseWidth);
    }


    //% block="get servo position for %servo"
    export function getCurrentPositionOfServo(servo:ServoChannelArm):number
    {
        let result = (rekabit.i2cRead(servo) - 50) * 18 / 20
        return (rekabit.i2cRead(servo) -50)*18/20;
    }
}
