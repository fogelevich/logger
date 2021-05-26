import { ConsoleLogger } from "../logger";

const log = new ConsoleLogger("Example Log");

log.error("test error");
log.info("test info");
log.verbose("test verbose");
log.warn("test warn");
log.log("test log");
log.debug("test debug");
log.trace("test trace");
