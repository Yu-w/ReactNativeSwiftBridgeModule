//
//  CalendarManager.swift
//  test
//
//  Created by Wang Yu on 7/20/17.
//  Copyright © 2017 650 Industries, Inc. All rights reserved.
//

import UIKit

@objc(CalendarManager)
class CalendarManager: RCTEventEmitter {

    @objc override func supportedEvents() -> [String]! {
        return [
            "EventReminder",
        ]
    }
    
    @objc func addEvent(_ name: String,
                        location: String,
                        date: NSDate,
                        callback: RCTResponseSenderBlock) -> Void {
        let date = Date()
        let formatter = DateFormatter()
        formatter.dateFormat = "dd.MM.yyyy"
        let ret = [
            "name": name,
            "location": location,
            "date" : formatter.string(from: date)
        ]
        callback([ret])
        self.sendEvent(withName: "EventReminder", body: ret)
    }
    
    @objc func addPromisedEvent(_ name: String,
                                resolve: RCTPromiseResolveBlock,
                                reject: RCTPromiseRejectBlock) {
        resolve(name)
    }
    
    override func constantsToExport() -> [String : Any]! {
        return [
            "x": 1,
            "y": 2,
            "z": "Arbitrary string",
        ]
    }
    
}
