import {TestBed, async, ComponentFixture, tick, fakeAsync, discardPeriodicTasks} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {Viewer} from './viewer/viewer.component';
import {Thumbs} from './thumbs/thumbs.component';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from '@angular/router/testing';

const TEST_IDS = {
  viewerId: 'catalog-view',
  prevBtnId: 'prev-slide-btn',
  nextBtnId: 'next-slide-btn',
  thumbBtnPrefix: 'thumb-button-',
  toggleSlideShowBtnId: 'toggle-slide-show-button',
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled;
  let viewer;
  let prevBtn;
  let nextBtn;
  let toggleSlideShowBtn;
  let catalogs;
  let thumbBtn2;
  let thumbBtn4;

  catalogs = [
    {
      thumb: '/assets/images/tea-light-candle.jpg',
      image: '/assets/images/tea-light-candle.jpg'
    },
    {
      thumb: '/assets/images/white-light-candle.jpg',
      image: '/assets/images/white-light-candle.jpg'
    },
    {
      thumb: '/assets/images/pink-light-candle.jpg',
      image: '/assets/images/pink-light-candle.jpg'
    },
    {
      thumb: '/assets/images/green-light-candle.jpg',
      image: '/assets/images/green-light-candle.jpg'
    }
  ]

  const getByTestId = (id, parentNode?) => {
    if (!parentNode) {
      parentNode = compiled;
    }
    return parentNode.querySelector(`[data-test-id="${id}"]`);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        Viewer,
        Thumbs
      ],
      providers: [],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges(true);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    await fixture.detectChanges();
    await fixture.whenStable();

    viewer = getByTestId(TEST_IDS.viewerId);
    prevBtn = getByTestId(TEST_IDS.prevBtnId);
    nextBtn = getByTestId(TEST_IDS.nextBtnId);
    thumbBtn2 = getByTestId(TEST_IDS.thumbBtnPrefix + '1');
    thumbBtn4 = getByTestId(TEST_IDS.thumbBtnPrefix + '3');
    toggleSlideShowBtn = getByTestId(TEST_IDS.toggleSlideShowBtnId);
  });

  it('Clicking on any catalog thumbnail should show the appropriate image', async() => {
    await thumbBtn2.click();

    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[1].image);

    await thumbBtn4.click();
    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[3].image);
  });

  it('Clicking on any catalog thumbnail should show the appropriate image', async() => {
    await thumbBtn2.click();

    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[1].image);

    await thumbBtn4.click();
    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[3].image);
  });

  it('Clicking on the previous button should show the previous image', async() => {
    await thumbBtn2.click();

    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[1].image);

    await prevBtn.click();
    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[0].image);
  });

  it('Clicking on the next button should show the next image', async() => {
    await thumbBtn2.click();

    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[1].image);

    await nextBtn.click();
    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[2].image);
  });

  it('Clicking on the previous button when on the first item should show the last image', async() => {
    expect(viewer.src).toContain(catalogs[0].image);

    await prevBtn.click();
    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[3].image);
  });

  it('Clicking on the next button when on the last item should show the first image', async() => {
    await thumbBtn4.click();
    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[3].image);

    await nextBtn.click();
    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[0].image);
  });

  it('Should change the image every 3 seconds when slide show checked', fakeAsync(() => {
    expect(viewer.src).toContain(catalogs[0].image);

    toggleSlideShowBtn.click();
    fixture.detectChanges();

    toggleSlideShowBtn = getByTestId(TEST_IDS.toggleSlideShowBtnId);
    expect(toggleSlideShowBtn.checked).toBeTruthy();

    tick(6010);
    fixture.detectChanges();

    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[2].image);
    discardPeriodicTasks();
  }));

  it('Should have user interaction like before, when slide show checked', fakeAsync(() => {
    expect(viewer.src).toContain(catalogs[0].image);

    toggleSlideShowBtn.click();
    thumbBtn4.click();
    nextBtn.click();
    nextBtn.click();
    prevBtn.click();
    fixture.detectChanges();

    toggleSlideShowBtn = getByTestId(TEST_IDS.toggleSlideShowBtnId);
    expect(toggleSlideShowBtn.checked).toBeTruthy();

    tick(3010);
    fixture.detectChanges();

    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[1].image);
    discardPeriodicTasks();
  }));

  it('Should stop changing the image every 3 seconds when slide show unchecked', fakeAsync(() => {
    thumbBtn2.click();
    fixture.detectChanges();

    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[1].image);

    toggleSlideShowBtn.click();
    tick(3010);
    fixture.detectChanges();

    viewer = getByTestId(TEST_IDS.viewerId);
    expect(viewer.src).toContain(catalogs[2].image);

    toggleSlideShowBtn.click();
    tick(3010);
    fixture.detectChanges();

    viewer = getByTestId(TEST_IDS.viewerId);
    toggleSlideShowBtn = getByTestId(TEST_IDS.toggleSlideShowBtnId);
    expect(toggleSlideShowBtn.checked).toBeFalsy();
    expect(viewer.src).toContain(catalogs[2].image);

    discardPeriodicTasks();
  }));
});
