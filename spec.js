describe("Exercise 2: Poker Hand Evaluation", function() {

  it("should be able to return a try again statement", function() {
    var hand = "Ah Ks 8d 10h 2c";
    expect(pokerHandEval.cardEval(pokerHandEval.ofAKind(pokerHandEval.cardArr(hand))))
    .toEqual("Sorry, please try again...");
  });

  it("should be able to return a pair of aces", function() {
    var hand = "Ah As 10c 7d 6s";
    expect(pokerHandEval.cardEval(pokerHandEval.ofAKind(pokerHandEval.cardArr(hand))))
    .toEqual("Hand: Ah As 10c 7d 6s (Pair of Aces)");
  });

  it("should be able to return 2 pair", function() {
    var hand = "Kh Kc 3s 3h 2d";
    expect(pokerHandEval.cardEval(pokerHandEval.ofAKind(pokerHandEval.cardArr(hand))))
    .toEqual("Hand: Kh Kc 3s 3h 2d (2 Pair)");
  });

  it("should be able to return a flush", function() {
    var hand = "Kh Qh 6h 2h 9h";
    expect(pokerHandEval.cardEval(pokerHandEval.ofAKind(pokerHandEval.cardArr(hand))))
    .toEqual("Hand: Kh Qh 6h 2h 9h (Flush)");
  });

  it("should be able to return a full house", function() {
    var hand = "Ah As Ad 7h 7c";
    expect(pokerHandEval.cardEval(pokerHandEval.ofAKind(pokerHandEval.cardArr(hand))))
    .toEqual("Hand: Ah As Ad 7h 7c (Full House (say hello to Danny Tanner!))");
  });

  it("should be able to return a straight", function() {
    var hand = "6h 5s 4d 3h 2c";
    expect(pokerHandEval.cardEval(pokerHandEval.ofAKind(pokerHandEval.cardArr(hand))))
    .toEqual("Hand: 6h 5s 4d 3h 2c (Straight)");
  });

  it("should be able to return a straight flush", function() {
    var hand = "Ah Kh Qh Jh 10h";
    expect(pokerHandEval.cardEval(pokerHandEval.ofAKind(pokerHandEval.cardArr(hand))))
    .toEqual("Hand: Ah Kh Qh Jh 10h (Straight Flush)");
  });

  it("should be able to return three of a kind", function() {
    var hand = "Qh Ks Qd 6h Qc";
    expect(pokerHandEval.cardEval(pokerHandEval.ofAKind(pokerHandEval.cardArr(hand))))
    .toEqual("Hand: Qh Ks Qd 6h Qc (Three-of-a-kind)");
  });

  it("should be able to return four of a kind", function() {
    var hand = "Ah 8s 8d 8h 8c";
    expect(pokerHandEval.cardEval(pokerHandEval.ofAKind(pokerHandEval.cardArr(hand))))
    .toEqual("Hand: Ah 8s 8d 8h 8c (Four-of-a-kind)");
  });

  it("should be able to return a try again statement", function() {
    var hand = "Jh Ks Ad 5h 4c";
    expect(pokerHandEval.cardEval(pokerHandEval.ofAKind(pokerHandEval.cardArr(hand))))
    .toEqual("Sorry, please try again...");
  });

  it("should be able to return 2 pair", function() {
    var hand = "Ah Ks 2d Kh 2c";
    expect(pokerHandEval.cardEval(pokerHandEval.ofAKind(pokerHandEval.cardArr(hand))))
    .toEqual("Hand: Ah Ks 2d Kh 2c (2 Pair)");
  });
});