<?php
$marks = ;
 if($marks>=90 &&  $marks<=100)
{
	$grade = "A+1";
}
else if ($marks>=80 &&  $marks<90)
{
	$grade = "A1";
}
else if ($marks>=70 &&  $marks<80)
{
	$grade = "A";
}
else if ($marks>=60 &&  $marks<70)
{
	$grade = "B";
}
else if ($marks>=50 &&  $marks<60)
{
	$grade = "C";
}
else if ($marks>=40 &&  $marks<50)
{
	$grade = "D";
}
else if ($marks>=33 &&  $marks<40)
{
	$grade = "E";
}
else if ($marks>=0 &&  $marks<33)
{
	$grade = "Fail";
}
else
{
	$grade = "Wrong Command";
}

echo $grade;
?>