//
//  CalendarManagerBridge.m
//  test
//
//  Created by Wang Yu on 7/20/17.
//  Copyright © 2017 650 Industries, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(CalendarManager, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name
                  location:(NSString *)location
                  date:(nonnull NSDate *)date
                  callback:(RCTResponseSenderBlock)callback)

RCT_EXTERN_METHOD(addPromisedEvent:(NSString *)name
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)resolve)

@end
