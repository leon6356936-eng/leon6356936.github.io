/*********************** 
 * Axb_Nasal_Task *
 ***********************/


// store info about the experiment session:
let expName = 'AXB_nasal_task';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(feedback_summaryRoutineBegin());
flowScheduler.add(feedback_summaryRoutineEachFrame());
flowScheduler.add(feedback_summaryRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'stimuli_processed/ban_v1.wav', 'path': 'stimuli_processed/ban_v1.wav'},
    {'name': 'stimuli_processed/ban_v2.wav', 'path': 'stimuli_processed/ban_v2.wav'},
    {'name': 'stimuli_processed/ba_v1.wav', 'path': 'stimuli_processed/ba_v1.wav'},
    {'name': 'stimuli_processed/ba_v2.wav', 'path': 'stimuli_processed/ba_v2.wav'},
    {'name': 'stimuli_processed/gen_v1.wav', 'path': 'stimuli_processed/gen_v1.wav'},
    {'name': 'stimuli_processed/gen_v2.wav', 'path': 'stimuli_processed/gen_v2.wav'},
    {'name': 'stimuli_processed/ge_v1.wav', 'path': 'stimuli_processed/ge_v1.wav'},
    {'name': 'stimuli_processed/ge_v2.wav', 'path': 'stimuli_processed/ge_v2.wav'},
    {'name': 'stimuli_processed/bang_v1.wav', 'path': 'stimuli_processed/bang_v1.wav'},
    {'name': 'stimuli_processed/bang_v2.wav', 'path': 'stimuli_processed/bang_v2.wav'},
    {'name': 'stimuli_processed/geng_v1.wav', 'path': 'stimuli_processed/geng_v1.wav'},
    {'name': 'stimuli_processed/geng_v2.wav', 'path': 'stimuli_processed/geng_v2.wav'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionsClock;
var instr_text;
var instr_key;
var trialClock;
var fixation;
var sound_A;
var sound_X;
var sound_B;
var key_resp;
var progress_text;
var ITIClock;
var ITI_break;
var feedback_summaryClock;
var summary_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: '歡迎參加本測驗。\n這個測驗是要測試您能否聽辨\n華語韻母中有無鼻音的對比。\n這對於區分聲隨韻母ㄢㄣㄤㄥ與單韻母非常重要。\n\n接下來您會聽到三聲語音 (A-X-B)\n您的任務是判斷中間的 X 聽起來較像 A 還是 B：\n若 X 較像 第一聲 (A)，請按鍵盤 [左鍵 ←]\n若 X 較像 第三聲 (B)，請按鍵盤 [右鍵 →]\n\n請在聽完三聲後再進行作答。\n準備好後，按下 [空白鍵] 即可開始實驗。',
    font: 'PingFang HK',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_A = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 0.5,
      });
  sound_A.setVolume(1.0);
  sound_A.isPlaying = false;
  sound_A.isFinished = false;
  sound_X = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 2.0,
      });
  sound_X.setVolume(1.0);
  sound_X.isPlaying = false;
  sound_X.isFinished = false;
  sound_B = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_B.setVolume(1.0);
  sound_B.isPlaying = false;
  sound_B.isFinished = false;
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  progress_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'progress_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, 0.4], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  ITI_break = new visual.TextStim({
    win: psychoJS.window,
    name: 'ITI_break',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "feedback_summary"
  feedback_summaryClock = new util.Clock();
  summary_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'summary_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instructionsMaxDurationReached;
var _instr_key_allKeys;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    instr_key.keys = undefined;
    instr_key.rt = undefined;
    _instr_key_allKeys = [];
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instr_text);
    instructionsComponents.push(instr_key);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }
    
    
    // if instr_text is active this frame...
    if (instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instr_key* updates
    if (t >= 0.0 && instr_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key.tStart = t;  // (not accounting for frame time here)
      instr_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key.clearEvents(); });
    }
    
    // if instr_key is active this frame...
    if (instr_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _instr_key_allKeys = _instr_key_allKeys.concat(theseKeys);
      if (_instr_key_allKeys.length > 0) {
        instr_key.keys = _instr_key_allKeys[_instr_key_allKeys.length - 1].name;  // just the last key pressed
        instr_key.rt = _instr_key_allKeys[_instr_key_allKeys.length - 1].rt;
        instr_key.duration = _instr_key_allKeys[_instr_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_key.corr, level);
    }
    psychoJS.experiment.addData('instr_key.keys', instr_key.keys);
    if (typeof instr_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_key.rt', instr_key.rt);
        psychoJS.experiment.addData('instr_key.duration', instr_key.duration);
        routineTimer.reset();
        }
    
    instr_key.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(ITIRoutineBegin(snapshot));
      trialsLoopScheduler.add(ITIRoutineEachFrame());
      trialsLoopScheduler.add(ITIRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var _key_resp_allKeys;
var current_task_num;
var total_task_num;
var progress_msg;
var my_correct_count;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    sound_A.isFinished = false;
    sound_A.setValue(audio_A);
    sound_A.secs=0.5;
    sound_A.setVolume(1.0);
    sound_X.isFinished = false;
    sound_X.setValue(audio_X);
    sound_X.secs=2.0;
    sound_X.setVolume(1.0);
    sound_B.isFinished = false;
    sound_B.setValue(audio_B);
    sound_B.secs=3.5;
    sound_B.setVolume(1.0);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // Run 'Begin Routine' code from code_3
    current_task_num = (trials.thisN + 1);
    total_task_num = trials.nTotal;
    progress_msg = `Progress: ${current_task_num} / ${total_task_num}`;
    if ((key_resp.corr === 1)) {
        my_correct_count = (my_correct_count + 1);
    }
    
    progress_text.setText(progress_msg);
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fixation);
    trialComponents.push(sound_A);
    trialComponents.push(sound_X);
    trialComponents.push(sound_B);
    trialComponents.push(key_resp);
    trialComponents.push(progress_text);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    
    // if fixation is active this frame...
    if (fixation.status === PsychoJS.Status.STARTED) {
    }
    
    if (sound_A.status === STARTED) {
        sound_A.isPlaying = true;
        if (t >= (sound_A.getDuration() + sound_A.tStart)) {
            sound_A.isFinished = true;
        }
    }
    // start/stop sound_A
    if (t >= 0.0 && sound_A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_A.tStart = t;  // (not accounting for frame time here)
      sound_A.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_A.play(); });  // screen flip
      sound_A.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_A.status === PsychoJS.Status.STARTED && t >= frameRemains || sound_A.isFinished) {
      // keep track of stop time/frame for later
      sound_A.tStop = t;  // not accounting for scr refresh
      sound_A.frameNStop = frameN;  // exact frame index
      // update status
      sound_A.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_A.stop();
    }
    if (sound_X.status === STARTED) {
        sound_X.isPlaying = true;
        if (t >= (sound_X.getDuration() + sound_X.tStart)) {
            sound_X.isFinished = true;
        }
    }
    // start/stop sound_X
    if (t >= 1.5 && sound_X.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_X.tStart = t;  // (not accounting for frame time here)
      sound_X.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_X.play(); });  // screen flip
      sound_X.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if ((sound_X.status === PsychoJS.Status.STARTED || sound_X.status === PsychoJS.Status.FINISHED) && t >= frameRemains || sound_X.isFinished) {
      // keep track of stop time/frame for later
      sound_X.tStop = t;  // not accounting for scr refresh
      sound_X.frameNStop = frameN;  // exact frame index
      // update status
      sound_X.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_X.stop();
    }
    if (sound_B.status === STARTED) {
        sound_B.isPlaying = true;
        if (t >= (sound_B.getDuration() + sound_B.tStart)) {
            sound_B.isFinished = true;
        }
    }
    // start/stop sound_B
    if (t >= 3.0 && sound_B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_B.tStart = t;  // (not accounting for frame time here)
      sound_B.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_B.play(); });  // screen flip
      sound_B.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 3.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if ((sound_B.status === PsychoJS.Status.STARTED || sound_B.status === PsychoJS.Status.FINISHED) && t >= frameRemains || sound_B.isFinished) {
      // keep track of stop time/frame for later
      sound_B.tStop = t;  // not accounting for scr refresh
      sound_B.frameNStop = frameN;  // exact frame index
      // update status
      sound_B.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_B.stop();
    }
    
    // *key_resp* updates
    if (t >= 3.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof ['left','right'] === 'string' ? [['left','right']] : ['left','right'], 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp.keys == corrAns) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *progress_text* updates
    if (t >= 0.0 && progress_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress_text.tStart = t;  // (not accounting for frame time here)
      progress_text.frameNStart = frameN;  // exact frame index
      
      progress_text.setAutoDraw(true);
    }
    
    
    // if progress_text is active this frame...
    if (progress_text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    sound_A.stop();  // ensure sound has stopped at end of Routine
    sound_X.stop();  // ensure sound has stopped at end of Routine
    sound_B.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ITIMaxDurationReached;
var ITIMaxDuration;
var ITIComponents;
function ITIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ITI' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ITIClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    ITIMaxDurationReached = false;
    // update component parameters for each repeat
    ITI_break.setText('+');
    psychoJS.experiment.addData('ITI.started', globalClock.getTime());
    ITIMaxDuration = null
    // keep track of which components have finished
    ITIComponents = [];
    ITIComponents.push(ITI_break);
    
    ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ITIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ITI' ---
    // get current time
    t = ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ITI_break* updates
    if (t >= 0.0 && ITI_break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ITI_break.tStart = t;  // (not accounting for frame time here)
      ITI_break.frameNStart = frameN;  // exact frame index
      
      ITI_break.setAutoDraw(true);
    }
    
    
    // if ITI_break is active this frame...
    if (ITI_break.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (ITI_break.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      ITI_break.tStop = t;  // not accounting for scr refresh
      ITI_break.frameNStop = frameN;  // exact frame index
      // update status
      ITI_break.status = PsychoJS.Status.FINISHED;
      ITI_break.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ITI' ---
    ITIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ITI.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (ITIMaxDurationReached) {
        ITIClock.add(ITIMaxDuration);
    } else {
        ITIClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback_summaryMaxDurationReached;
var feedback_summaryMaxDuration;
var feedback_summaryComponents;
function feedback_summaryRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_summary' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedback_summaryClock.reset(routineTimer.getTime());
    routineTimer.add(30.000000);
    feedback_summaryMaxDurationReached = false;
    // update component parameters for each repeat
    summary_text.setText(summary_msg);
    summary_text.setFont('PingFang HK');
    summary_text.setHeight(0.05);
    psychoJS.experiment.addData('feedback_summary.started', globalClock.getTime());
    feedback_summaryMaxDuration = null
    // keep track of which components have finished
    feedback_summaryComponents = [];
    feedback_summaryComponents.push(summary_text);
    
    feedback_summaryComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_summaryRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_summary' ---
    // get current time
    t = feedback_summaryClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *summary_text* updates
    if (t >= 0.0 && summary_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      summary_text.tStart = t;  // (not accounting for frame time here)
      summary_text.frameNStart = frameN;  // exact frame index
      
      summary_text.setAutoDraw(true);
    }
    
    
    // if summary_text is active this frame...
    if (summary_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 30.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (summary_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      summary_text.tStop = t;  // not accounting for scr refresh
      summary_text.frameNStop = frameN;  // exact frame index
      // update status
      summary_text.status = PsychoJS.Status.FINISHED;
      summary_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_summaryComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_summaryRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_summary' ---
    feedback_summaryComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback_summary.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (feedback_summaryMaxDurationReached) {
        feedback_summaryClock.add(feedback_summaryMaxDuration);
    } else {
        feedback_summaryClock.add(30.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
