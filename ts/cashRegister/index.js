function checkCashRegister(price, cash, cid) {
    var mycid = cid;
    var change = cash - price;
    var cashInDrawer = 0;
    var dueChange = [];
    var sumDueChange = 0;
    mycid = cid.filter(function (item) { return item[1] > 0; });
    mycid.forEach(function (note) { return cashInDrawer += note[1]; });
    if (cashInDrawer === change) {
        return {
            status: "CLOSED",
            change: cid
        };
    }
    else if (cashInDrawer < change) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    }
    else {
        mycid.forEach(function (item) {
            var diff = change - sumDueChange;
            if (diff) {
                if (diff >= 100 && item[0] === 'ONE HUNDRED') {
                    var hunnids = Math.floor(item[1] / 100);
                    if (Math.floor(diff / 100) >= hunnids) {
                        sumDueChange += 100 * hunnids;
                        dueChange.push(["ONE HUNDRED", 100 * hunnids]);
                    }
                    else if (Math.floor(diff / 100) < hunnids) {
                        if (diff % 100 === 0) {
                            sumDueChange += diff;
                            dueChange.push(["ONE HUNDRED", diff]);
                        }
                    }
                }
                else if (diff >= 20 && diff < 100 && item[0] === 'TWENTY') {
                    var twenties = Math.floor(item[1] / 20);
                    if (Math.floor(diff / 20) >= twenties) {
                        sumDueChange += 20 * twenties;
                        dueChange.push(["TWENTY", 20 * twenties]);
                    }
                    else if (Math.floor(diff / 20) < twenties) {
                        sumDueChange += Math.floor(diff / 20) * 20;
                        dueChange.push(["TWENTY", Math.floor(diff / 20) * 20]);
                    }
                }
                else if (diff >= 10 && diff < 20 && item[0] === 'TEN') {
                    var tens = Math.floor(item[1] / 10);
                    if (Math.floor(diff / 10) >= tens) {
                        sumDueChange += 10 * tens;
                        dueChange.push(["TEN", 10 * tens]);
                    }
                    else if (Math.floor(diff / 10) < tens) {
                        sumDueChange += Math.floor(diff / 10) * 10;
                        dueChange.push(["TEN", Math.floor(diff / 10) * 10]);
                    }
                }
                else if (diff >= 5 && diff < 10 && item[1] === 5) {
                    var fives = Math.floor(diff / 5);
                    sumDueChange += 5 * fives;
                    dueChange.push(["FIVE", 5 * fives]);
                }
                else if (diff >= 1 && diff < 5 && item[1] === 1) {
                    var ones = Math.floor(diff);
                    sumDueChange += ones;
                    dueChange.push(["ONE", ones]);
                }
                else if (diff >= 0.25 && diff < 1 && item[0] === 'QUARTER') {
                    var quarters = Math.floor(item[1] / 0.25);
                    if (Math.floor(diff / 0.25) >= quarters) {
                        sumDueChange += 0.25 * quarters;
                        dueChange.push(["QUARTER", 0.25 * quarters]);
                    }
                    else if (Math.floor(diff / 0.25) < quarters) {
                        sumDueChange += Math.floor(diff / 0.25) * 0.25;
                        dueChange.push(["QUARTER", Math.floor(diff / 0.25) * 0.25]);
                    }
                }
                else if (diff >= 0.1 && diff < 0.25 && item[1] === 0.1) {
                    var tenths = Math.floor(diff / 0.1);
                    sumDueChange += 0.1 * tenths;
                    dueChange.push(["DIME", 0.1 * tenths]);
                }
                else if (diff >= 0.05 && diff < 0.1 && item[1] === 0.05) {
                    var nickels = Math.floor(diff / 0.05);
                    sumDueChange += 0.05 * nickels;
                    dueChange.push(["NICKEL", 0.05 * nickels]);
                }
                else if (diff >= 0.01 && diff < 0.05 && item[1] === 0.01) {
                    var pennys = Math.floor(diff / 0.01);
                    sumDueChange += 0.01 * pennys;
                    dueChange.push(["PENNY", 0.25 * pennys]);
                }
                else {
                    return {
                        status: "INSUFFICIENT_FUNDS",
                        change: []
                    };
                }
            }
        });
        if (dueChange === []) {
            return {
                status: "INSUFFICIENT_FUNDS",
                change: []
            };
        }
        else {
            return {
                status: "OPEN",
                change: dueChange
            };
        }
    }
}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // return {status: "INSUFFICIENT_FUNDS", change: []}
