import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].name).toBe('foo');
  });

  it('Sulfuras quality never drops', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 80)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(80);
  });

  it('Aged Brie increases quality', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Aged Brie', 1, 1)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(2);
  });

  it('Backstage passes are on a rush', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 1), new Item('Backstage passes to a TAFKAL80ETC concert', 9, 2)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(4);
    expect(items[1].quality).toBe(4);
  });

  it('Sell by date passed, time to degrade Quality twice as fast', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('spoiled item', 0, 4)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(2);
  });

  it('My backstage pass was for yesterday :/', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 80)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(0);
  });
});
