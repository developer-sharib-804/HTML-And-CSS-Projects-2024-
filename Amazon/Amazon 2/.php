<?php
    // right triangle pattern
    $size = 5;
    for($i = 0; $i < $size; $i++) {
        // print spaces
        for($j = 1; $j < $size - $i; $j++) {
            echo " ";
        }
        // print stars
        for($k = 0; $k <= $i; $k++) {
            echo "*";
        }
        echo "\n";
    }
?>
<?php
    // hollow triangle pattern
    $size = 5;
    for($i = 1; $i <= $size; $i++) {
        for($j = 0; $j < $i; $j++) {
            // not last row
            if($i != $size) {
                if($j == 0 || $j == $i - 1) {
                    echo "*";
                }
                else {
                    echo "&nbsp;&nbsp;";
                }
            }
            // last row
            else {
                echo "*";
            }
        }
        echo "<br>";
    }
?>
<?php
    // pyramid star pattern
    $size = 5;
    for($i = 0; $i < $size; $i++) {
        // print spaces
        for($j = 0; $j < $size - $i - 1; $j++) {
            echo "&nbsp;&nbsp;";
        }
        // print stars
        for($k = 0; $k < 2 * $i + 1; $k++) {
            echo "*";
        }
        echo "<br>";
    }
?>
<?php
    // pyramid star pattern
    $size = 5;
    for($i = 0; $i < $size; $i++) {
        // print spaces
        for($j = 0; $j < $i; $j++) {
            echo "&nbsp;&nbsp;";
        }
        // print stars
        for($k = 0; $k < 2 * ($size - $i) - 1; $k++) {
            echo "*";
        }
        echo "<br>";
    }
?>
<?php
    $size = 5;
    
    // upside pyramid
    for ($i = 1; $i <= $size; $i++) {
        // printing spaces
        for ($j = $size; $j > $i; $j--) {
            echo "&nbsp;&nbsp;";
        }
        // printing star
        for ($k = 0; $k < $i * 2 - 1; $k++) {
            echo "*";
        }
        echo "<br>";
    }
    // downside pyramid
    for ($i = 1; $i <= $size - 1; $i++) {
        // printing spaces
        for ($j = 0; $j < $i; $j++) {
            echo "&nbsp;&nbsp;";
        }
        // printing star
        for ($k = ($size - $i) * 2 - 1; $k > 0; $k--) {
            echo "*";
        }
        echo "<br>";
    }
?>
<?php
    $size = 5;
    
    // reversed pyramid star pattern
    for ($i = 0; $i < $size; $i++) {
        // printing spaces
        for ($j = 0; $j < $i; $j++) {
            echo "&nbsp;&nbsp;";
        }
        // printing star
        for ($k = 0; $k < ($size - $i) * 2 - 1; $k++) {
            echo "*";
        }
        echo "<br>";
    }
    // pyramid star pattern
    for ($i = 2; $i <= $size; $i++) {
        // printing spaces
        for ($j = $size; $j > $i; $j--) {
            echo "&nbsp;&nbsp;";
        }
        // printing star
        for ($k = 0; $k < $i * 2 - 1; $k++) {
            echo "*";
        }
        echo "<br>";
    }
?>
<?php
    $size = 5;
    
    for ($i = 1; $i <= $size; $i++) {
        for ($j = 0; $j < $size - $i; $j++) {
            echo "&nbsp;&nbsp;";
        }
        for ($k = 0; $k < $i; $k++) {
            echo "*";
        }
        echo "<br>";
    }
    for ($i = 1; $i <= $size - 1; $i++) {
        for ($j = 0; $j < $i; $j++) {
            echo "&nbsp;&nbsp;";
        }
        for ($k = 0; $k < $size - $i; $k++) {
            echo "*";
        }
        echo "<br>";
    }
?>